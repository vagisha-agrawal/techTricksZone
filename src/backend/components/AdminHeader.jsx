import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { navigateState } from '../../state/AppAtom'

const AdminHeader = () => {
    const [nav, setNav] = useRecoilState(navigateState);

    const headerLink = [
        {
            key: 1,
            label: 'collection',
            link: '/admin/collections'
        },
        {
            key: 2,
            label: 'service',
            link: '/admin/services'
        },
    ]
  return (
    <>
        <div className="flex w-full justify-between bg-white">
            <div className="flex">
                {headerLink.map((v)=><Link className={`p-[20px] capitalize font-semibold ${nav == v.label ? 'bg-[#0a1743] text-white hover:text-white' : 'text-[#0a1743] hover:text-[#0a1743]'}`} key={v.key} to={v.link}>{v.label}</Link>
                )}
            </div>
        </div>
    </>
  )
}

export default AdminHeader