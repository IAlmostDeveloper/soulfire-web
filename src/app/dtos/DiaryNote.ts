export class DiaryNote {
  id: string;
  userId: string;
  title: string;
  content: string;
  updatedDate: string;

  constructor(dto: any){
    this.id = dto.id;
    this.userId = dto.userId;
    this.title = dto.title;
    this.content = dto.content;
    this.updatedDate = dto.updatedDate;
  }
}
