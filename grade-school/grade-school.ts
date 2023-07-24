export class GradeSchool {
  students = new Map<number, string[]>();

  roster(): Map<number, string[]> {
    return this.students;
  }

  add(name: string, grade: number): void {
    const currentStudents = this.students.get(grade)!;
    this.students.set(grade, [...currentStudents, name]);
  }

  grade(name: string): number {
    return this.students.has(name)!;
  }
}
