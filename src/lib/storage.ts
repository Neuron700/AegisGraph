import Dexie,{type Table} from 'dexie';
import type {Scan} from './engine';
class Database extends Dexie{scans!:Table<Scan,string>;constructor(){super('aegisgraph-v1');this.version(1).stores({scans:'id,project,createdAt'})}}
export const db=new Database();
export const listScans=()=>db.scans.orderBy('createdAt').reverse().toArray();
