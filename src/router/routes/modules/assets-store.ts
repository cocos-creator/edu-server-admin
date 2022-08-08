import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const assetsStore: AppRouteModule = {
  path: '/assets-store',
  name: 'AssetsStore',
  component: LAYOUT,
  redirect: '/assets-store/list',
  meta: {
    orderNo: 11,
    icon: 'ion:grid-outline',
    title: t('routes.assets-store.assetsStoreManagement'),
  },
  children: [
    {
      path: 'list',
      name: 'AssetsStoreList',
      component: () => import('/@/views/assets-store/list/index.vue'),
      meta: {
        title: t('routes.assets-store.list.title'),
      },
    },
    {
      path: 'category',
      name: 'AssetsStoreCategory',
      component: () => import('/@/views/assets-store/category/index.vue'),
      meta: {
        title: t('routes.assets-store.category.title'),
      },
    },
  ],
};

export default assetsStore;
