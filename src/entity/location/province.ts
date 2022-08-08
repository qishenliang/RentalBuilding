import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('C_LOCATION_PROVINCE')
export class Province {
  @PrimaryColumn({ name: 'CODE' })
  code: string;

  @Column({ name: 'NAME' })
  name: string;
}
