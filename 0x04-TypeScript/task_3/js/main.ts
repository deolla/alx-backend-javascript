/// <reference path="crud.d.ts" />;
import { RowID, RowElement } from './interface';
import * as CRUD from "./crud";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
};

const  newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    ...row,   
    age: 23,
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)

const upRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, upRow);

CRUD.deleteRow(125);
