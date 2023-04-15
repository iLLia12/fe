import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import useAppDispatch from '../../../store/useAppDispatch';
import { setIsLeftSideBarOpen } from '../../../store/slices/feSettings';
import useAppSelector from '../../../store/useAppSelector';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { route } from '../../../utils/routes';
import RouteGuard from '../../guards/route-guard';

const GridAdmin = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  const { isLeftSideBarOpen } = useAppSelector((state) => state.feSettings);
  const [sideBarOpen, setSideBar] = useState(false);
  const dispatch = useAppDispatch();

  const handleSideBarClick = (): void => {
    setSideBar(!sideBarOpen);
    dispatch(setIsLeftSideBarOpen(!sideBarOpen));
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', (url) => {
      NProgress.done(false);
    });
  }, []);

  useEffect(() => {
    setSideBar(isLeftSideBarOpen);
  }, [isLeftSideBarOpen]);

  const layoutGridCols = (): string => {
    if (sideBarOpen) return 'grid-cols-[250px,20x1fr]';
    else return 'grid-cols-[70px,20x1fr]';
  };

  useEffect(() => {
    console.log('user: ', user);
  }, [user]);

  return (
    <>
      <div
        className={
          'bg-white grid min-h-screen transition-all ease-in-out duration-200 grid-rows-[60px,22x1fr,30px] ' +
          layoutGridCols()
        }
      >
        <div
          className={`bg-gray-100 transition-all duration-75 col-start-1 col-end-2 row-start-1 row-end-25 border-r-2 border-white`}
        >
          <ul>
            <li>
              <Link href={route('home')}>Home</Link>
            </li>
            <li>
              <Link href={route('users')}>Users</Link>
            </li>
            <li>
              <Link href={route('posts')}>Posts</Link>
            </li>
          </ul>
        </div>
        <div
          className={`col-start-2 col-end-25 row-start-1 row-end-2 bg-gray-100 p-3`}
        >
          <div className="flex justify-between">
            <div
              className={'cursor-pointer inline-block'}
              onClick={handleSideBarClick}
            >
              open
            </div>
            <div>{user?.username}</div>
          </div>
        </div>
        <div className={`col-start-2 col-end-25 row-start-2 row-end-23 p-2`}>
          {children}
        </div>
        <div
          className={`bg-gray-100 col-start-2 col-end-25 row-start-23 row-end-25 p-3`}
        >
          footer
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default GridAdmin;

export const getAdminLayout = (page: ReactElement) => {
  return (
    <RouteGuard>
      <GridAdmin>{page}</GridAdmin>
    </RouteGuard>
  );
};
