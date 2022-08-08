import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('C_LOCATION_CITY')
export class City {
  @PrimaryColumn({ name: 'CODE' })
  code: string;

  @Column({ name: 'NAME' })
  name: string;
}
