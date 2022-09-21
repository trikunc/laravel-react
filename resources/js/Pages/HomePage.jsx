import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import Paginator from '@/Components/Paginator';
import TestCoding from '@/Components/TestCoding';

export default function HomePage(props) {
  const { title, description, news, auth } = props
  console.log(props)
  return (
    <div className='min-h-screen bg-slate-50'>
      <Head title={title}></Head>
      <Navbar user={auth.user} />
      <h1>{description}</h1>
      <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
        <Card news={news.data} />
      </div>
      <div className="flex justify-center">
        <Paginator meta={news.meta} />
      </div>
      {/* <TestCoding /> */}
    </div>
  );
}
