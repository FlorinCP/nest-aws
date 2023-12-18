import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from '../question/question.entity';
import { Reply } from '../reply/reply.entity';

@Entity({ name: 'files' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'file_name' })
  fileName: string;

  @Column({ name: 'file_type' })
  fileType: string;

  @Column()
  pages: number;

  @Column({ name: 'file_data', type: 'blob' })
  fileData: Buffer;

  @ManyToOne(() => Question, (question) => question.questionFiles)
  question: Question;

  @ManyToOne(() => Reply, (reply) => reply.files, { lazy: true })
  reply: Reply;
}
