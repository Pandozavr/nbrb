export interface ICurrency {
    Cur_ID: number;
    Cur_ParentID: number;
    Cur_Code: string;
    Cur_Abbreviation: string;
    Cur_Name: string;
    Cur_Name_Bel: string;
    Cur_Name_Eng: string;

}

export interface IRate {
    Cur_ID: number
    Date: string;
    Cur_Abbreviation: string;
    Cur_Scale: number;
    Cur_Name: string;
    Cur_OfficialRate: number;
}
