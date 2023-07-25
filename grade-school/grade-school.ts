type Roster = {
  [key: number]: string[];
};

const sample = {
  1: ["Hello"],
  5: ["Bob", "Jim"],
};

export class GradeSchool {
  private school: Roster;

  constructor() {
    this.school = {};
  }

  private deepCopy(obj: any): any {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.deepCopy(item));
    }

    const newObj: { [key: string]: any } = {};
    Object.keys(obj).forEach((key) => {
      newObj[key] = this.deepCopy(obj[key]);
    });

    return newObj;
  }

  roster(): Roster {
    return this.deepCopy(this.school);
  }

  add(name: string, grade: number): void {
    for (let gradeKey of Object.keys(this.school)) {
      this.school[parseInt(gradeKey)] = this.school[parseInt(gradeKey)].filter(
        (currentName) => currentName !== name
      );
    }
    const currentStudents = this.school[grade];
    currentStudents
      ? (this.school[grade] = [...currentStudents, name].sort())
      : (this.school[grade] = [name]);
  }

  grade(grade: number): string[] {
    return this.school[grade] ? [...this.school[grade]] : [];
  }
}
