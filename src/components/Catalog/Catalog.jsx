import style from './Catalog.module.css'
import { Card } from '../Cards/Card'

export function Catalog() {
    return (
        <>
            <div className="container">
            <div className={style.catalog_grid}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
        </>
    )
}