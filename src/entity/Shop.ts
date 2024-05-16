import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductPro} from "./Product";

@Entity()
export class Shop{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(()=> ProductPro , (produduct)=> produduct.shop)
    product: ProductPro[];
}