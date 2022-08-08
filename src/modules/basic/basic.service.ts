import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Province } from '../../entity/location/province';
import { City } from '../../entity/location/city';
import { Area } from '../../entity/location/area';
import { LocationModel } from './interface';
import { Repository, Like } from 'typeorm';

@Provide()
export class BasicService {
  @InjectEntityModel(Province)
  provinceModel: Repository<Province>;

  @InjectEntityModel(City)
  cityModel: Repository<City>;

  @InjectEntityModel(Area)
  areaModel: Repository<Area>;

  async getLocation(code: string) {
    let result: LocationModel[] = [];
    if (!code) {
      result = await this.provinceModel.find({});
    } else if (code.length === 2) {
      result = await this.cityModel.find({
        where: { code: Like(`${code}%`) },
      });
    } else if (code.length === 4) {
      result = await this.areaModel.find({
        where: { code: Like(`${code}%`) },
      });
    }
    return { code: 200, data: result, mes: 'ok' };
  }
}
