import React from 'react'
import PrimaryBtn from '../components/PrimaryBtn'
import Btn2 from '../components/Btn2'

export default function AboutPC() {
  return (
    <div className='flex justify-between items-center px-6'>
      <div className='flex flex-col gap-4'>
        <h1 className='my-6 text-3xl font-bold'>конфигуратор</h1>
        <h2>Конфигуратор системного блока UPGrade поможет подобрать комплектацию ПК и проверить комплектующие на совместимость. Выбирайте, сравнивайте характеристики, заказывайте дополнительные опции для создания конфигурации своей мечты!</h2>
        <div className='w-50'>
            <Btn2 text2="Подобрать ПК "/>
        </div>
      </div>
      <div>
        <img src="https://files.ox-sys.com/cache/original/image/c0/c7/eb/c0c7eb9642f27583a30c1699c0366c28fb50e748ff93266aac8ae79c7099af04.png" alt="img" />
      </div>
    </div>
  )
}
