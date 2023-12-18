import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Question } from '../question/question.entity';
import { Reply } from '../reply/reply.entity';
import { Appointment } from '../appointment/appointment.entity';
import { PasswordToken } from '../password-token/password-token.entity';
import { Role } from '../../common/enums/role.enum';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  nume: string;

  @Column()
  prenume: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Question, (question) => question.user, {
    cascade: ['insert', 'update'],
  })
  questions: Question[];

  @OneToMany(() => Reply, (reply) => reply.user, {
    cascade: ['insert', 'update'],
  })
  replies: Reply[];

  @OneToMany(() => Appointment, (appointment) => appointment.user, {
    cascade: ['insert', 'update'],
  })
  appointments: Appointment[];

  @Column()
  role: Role;

  @OneToOne(() => PasswordToken, (passwordToken) => passwordToken.user, {
    cascade: ['insert', 'update'],
  })
  passwordToken: PasswordToken;

  constructor(
    phone: string,
    nume: string,
    prenume: string,
    email: string,
    role: Role,
  ) {
    this.phone = phone;
    this.nume = nume;
    this.prenume = prenume;
    this.email = email;
    this.role = role;
  }
}
