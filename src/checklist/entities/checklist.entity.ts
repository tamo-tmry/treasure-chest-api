import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Checklist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  label: string;
}
