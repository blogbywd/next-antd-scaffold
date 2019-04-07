import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { color_primary } from '../constants/CustomTheme';

const Layout = ({ title, children }) => (
  <Fragment>
    <style jsx>{`
      .content-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 70px 20px 20px 20px;
        padding: 10px 20px;
        background-color: ${color_primary};
      }
    `}</style>
    <Header title={title} />
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);
export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

Layout.defaultProps = {
  title: '',
  children: null
};