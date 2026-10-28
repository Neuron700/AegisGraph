import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'AegisGraph — Security Intelligence',description:'Trace evidence, understand risk, and investigate source code locally.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
