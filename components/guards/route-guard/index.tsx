import { useRouter } from 'next/router';
import {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import useAppSelector from '../../../store/useAppSelector';
import useAppDispatch from '../../../store/useAppDispatch';
import { setIsAuthenticated } from '../../../store/slices/auth';

const RouteGuard = (props: {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) => {
  const { children } = props;

  const router = useRouter();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const authCheck = () => {
      dispatch(setIsAuthenticated({ isAuthenticated: true }));
      // if (
      //   !user.isLoggedIn &&
      //   !publicPaths.includes(router.asPath.split('?')[0])
      // ) {
      //   setAuthorized(false);
      //   dispatch(setRedirectLink({ goto: router.asPath }));
      //   void router.push({
      //     pathname: '/login',
      //   });
      // } else {
      //   setAuthorized(true);
      // }
    };

    authCheck();

    const preventAccess = () =>
      dispatch(setIsAuthenticated({ isAuthenticated: false }));

    router.events.on('routeChangeStart', preventAccess);
    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', preventAccess);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [dispatch, router, router.events, isAuthenticated]);

  useEffect(() => {
    console.log('RouteGuard isAuthenticated: ', isAuthenticated);
  }, [isAuthenticated]);

  // return authorized ? children : <div>401</div>;
  return children;
};

export default RouteGuard;
