import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Logo from './logo';
export default function Navbar() {
    const { auth } = usePage<SharedData>().props;

    const menuMid = [
        { title: 'Kelola Surat Keluar - Masuk', href: '/manageSurat' },
        { title: 'Kelola Kartu Inventaris Barang (KIB)', href: '/manageKib' },
    ];

    const menuRight = [
        { title: 'Login', href: '/sosmed1' },
        { title: 'Register', href: '/sosmed2' },
    ];

    const menuDropdown = [
        { title: 'Profile', href: '/profile'},
        { title: 'Setting', href: '/setting'},
        { title: 'Logout', href: '/logout'},
    ]

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            <nav className="flex h-full w-full items-center justify-between border px-16 py-4">
                <div className="flex h-full items-center justify-center">
                    <Logo />
                </div>
                <div>
                    <ul className="flex gap-4">
                        {menuMid.map((item, index) => (
                            <li key={index} className='font-semibold'>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-4">
                        {auth.user ? (
                            <div className="relative">
                                <div onClick={toggleDropdown} className="flex cursor-pointer items-center font-semibold">
                                    <p>{auth.user.name}</p>
                                    <FaAngleDown />
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-4 rounded border p-2 shadow-lg space-y-2 w-24 bg-black">
                                        {menuDropdown.map((item, index) =>
                                        <div key={index} className='w-full justify-center flex flex-col items-center'>
                                            <a href={item.href}>{item.title}</a>
                                        </div>
                                    )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            menuRight.map((item, index) => (
                                <li key={index} className='font-semibold'>
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
