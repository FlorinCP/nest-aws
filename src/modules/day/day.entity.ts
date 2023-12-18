import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Appointment } from '../appointment/appointment.entity';
import { WorkingStatus } from '../../common/enums/working-status.enum';

@Entity({ name: 'day' })
export class DayEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'month_number' })
  monthNumber: number;

  @Column({ name: 'day_number' })
  dayNumber: number;

  @Column()
  year: number;

  @Column({ type: 'enum', enum: WorkingStatus, default: WorkingStatus.WORKING })
  workingStatus: WorkingStatus;

  @Column({ name: 'working_hours' })
  workingHours: number;

  @Column({ name: 'start_hour' })
  startHour: number;

  @Column({ name: 'end_hour' })
  endHour: number;

  @OneToMany(() => Appointment, (appointment) => appointment.day)
  appointments: Appointment[];
}
