import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity({ name: 'TRX_LOG'})
export class Credit {

  @PrimaryGeneratedColumn()
  id_TRX: number;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_TRX: Date;

  @Column()
  json_TRX: string;
}