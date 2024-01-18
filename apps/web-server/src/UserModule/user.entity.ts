import { User as UserI } from "@kudyniuk/shared-types"
import { Entity, ManyToOne, PrimaryColumn } from "typeorm"

import { Company } from "../CompanyModule"

@Entity()
export class User implements UserI {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => Company, (company) => company.users)
  company: Company
}
