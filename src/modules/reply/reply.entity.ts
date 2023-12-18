import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Question } from '../question/question.entity';
import { FileEntity } from '../file/file.entity';

@Entity({ name: 'reply' })
export class Reply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'reply_text' })
  messageText: string;

  @CreateDateColumn({ name: 'creation_date' })
  creationDate: Date;

  @ManyToOne(() => User, (user) => user.replies, { lazy: true })
  user: User;

  @ManyToOne(() => Question, (question) => question.replies, { lazy: true })
  question: Question;

  @OneToMany(() => FileEntity, (fileEntity) => fileEntity.reply, {
    cascade: true,
  })
  files: FileEntity[];

  // Optional: Constructor for creating instances easily
  constructor(messageText: string, user: User, question: Question) {
    this.messageText = messageText;
    this.user = user;
    this.question = question;
    this.creationDate = new Date(); // Sets the creation date to the current date/time
  }
}
