import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        // {
        //   key: 'Pro 首页',
        //   title: 'Pro 首页',
        //   href: 'https://pro.ant.design',
        //   blankTarget: true,
        // },
        // {
        //   key: 'github',
        //   title: <Icon type="github" />,
        //   href: 'https://github.com/ant-design/ant-design-pro',
        //   blankTarget: true,
        // },
        {
          key: 'Epro 首页',
          title: 'Epro 首页',
          href: 'https://ecp.vhepro.com/#/home',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/leslie1943',
          blankTarget: true,
        },
        {
          key: 'Epro Operation',
          title: 'Epro Operation',
          href: 'https://op.vhepro.com',
          blankTarget: true,
        },
        // {
        //   key: 'Ant Design',
        //   title: 'Ant Design',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
      copyright={
        <Fragment>
          {/* Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品 */}
          Copyright <Icon type="copyright" /> 2018 北京东软望海科技有限公司 
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
