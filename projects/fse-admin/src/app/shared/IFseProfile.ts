import { IFseSkill } from "./IFseSkill";

export interface IFseProfile
{
    Name: string;
    Email: string;
    AssociateId: string;
    Mobile: number;
    Skills: IFseSkill[];
}