import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('C_LOCATION_AREA')
export class Area {
  @PrimaryColumn({ name: 'CODE' })
  code: string;

  @Column({ name: 'NAME' })
  name: string;
}
