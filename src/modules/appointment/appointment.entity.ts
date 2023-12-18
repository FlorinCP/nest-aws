import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DayEntity } from '../day/day.entity'; // Adjust the import path as needed
import { User } from '../user/user.entity';
import { Question } from '../question/question.entity';
import { SlotStatus } from '../../common/enums/slot-status.enum';

@Entity({ name: 'appointment' })
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'start_hour' })
  startHour: string;

  @Column({ name: 'end_hour' })
  endHour: string;

  @Column()
  duration: number;

  @Column({ type: 'enum', enum: SlotStatus, default: SlotStatus.FREE })
  slotStatus: SlotStatus;

  @ManyToOne(() => DayEntity)
  day: DayEntity;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Question)
  question: Question;
}
