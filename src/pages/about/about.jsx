import React from 'react'
import Carousel from '../../components/ui/carousel'
import TitleText from '../../components/ui/titletext'

const About = () => {
  return (
    <div className='container lg:flex gap-5 items-center my-5'>
      <div className='w-full lg:w-[50%]'>
        <Carousel/>
      </div>
      <div>
        <TitleText text='About Us'/>
        <p className='text-[grey] text-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quaerat.</p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptate, hic unde, perferendis nemo enim aperiam minima quas doloremque amet porro a atque nulla aut. Est eaque nihil magnam voluptatem, fugiat voluptatum placeat quibusdam unde voluptate, sunt provident adipisci consequatur ea impedit possimus alias! Quisquam beatae quidem obcaecati voluptas. Culpa facere amet sapiente aliquid molestias praesentium obcaecati error dolorum. Culpa similique quas molestias labore, a repellat eaque voluptatum ratione veritatis vero earum soluta quae consectetur beatae quia aliquam pariatur facere? Magni labore harum rerum quod magnam soluta obcaecati, sit aliquid quisquam quis inventore. Laudantium odio molestias, enim aut dolorem voluptate.
      </div>
    </div>
  )
}

export default About