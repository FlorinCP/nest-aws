import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Appointment } from '../appointment/appointment.entity';
import { Reply } from '../reply/reply.entity';
import { FileEntity } from '../file/file.entity';
import { Status } from '../../common/enums/status.enum';

@Entity({ name: 'question' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'question_title' })
  questionTitle: string;

  @Column({ name: 'question_text', type: 'text', length: 20000 })
  questionText: string;

  @CreateDateColumn({ name: 'creation_date' })
  creationDate: Date;

  @Column({ type: 'enum', enum: Status, default: Status.WAITING })
  status: Status;

  @OneToMany(() => FileEntity, (fileEntity) => fileEntity.question, {
    cascade: ['insert', 'update'],
  })
  questionFiles: FileEntity[];

  @ManyToOne(() => User, (user) => user.questions)
  user: User;

  @OneToMany(() => Appointment, (appointment) => appointment.question, {
    cascade: ['insert', 'update'],
  })
  appointments: Appointment[];

  @OneToMany(() => Reply, (reply) => reply.question, {
    cascade: ['insert', 'update'],
  })
  replies: Reply[];
}
