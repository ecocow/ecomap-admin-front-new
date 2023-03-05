
export interface BtnEvent {
  name: string,
  click: Function
}
export interface Callback {
  data: any,
  successAction?: (data?: any) => void,
  failAction?: (data?: any) => void,
}
export interface Dialogs {
  active: string,
  title?: string,
  msg?: string,
  file?: File,
  data?: any,
  overlay?: boolean,
  overlayClose?: boolean,
  pin?: boolean,
  type?: string,
  userType?: string,
  positive?: BtnEvent,
  negative?: BtnEvent,
  request?: BtnEvent,
}
export interface Loading {
  loadingBus: any[],
}
export interface GPS {
  longitude: number,
  latitude: number,
}
export interface Sending {
  nick_name: string;
  c_image_path: string,
  c_nick_name: string,
  customer_user: number,
  d_image_path: string,
  d_nick_name: string,
  delivery_comment: string,
  delivery_star: number,
  delivery_user: number,
  direct_pickup_yn: string,
  due_date: string,
  finish_addr: string,
  finish_addr_detail: string,
  finish_call: string;
  finish_desc: string,
  finish_name: string,
  finish_point: string,
  mission_code: string,
  id: number,
  item_price: number,
  item_size_code: string,
  mod_date: string,
  pickup_date: string,
  request_pickup_date: string,
  read_cnt: number,
  read_user: number,
  reg_date: string,
  sending_item: any[],
  sending_price: number,
  sending_talk_id: string,
  start_addr: string,
  start_addr_detail: string,
  start_desc: string,
  start_point: string,
  status_code: string,
  title: string,
  showInfoType: string,
}
export interface Profile {
  account_bank: string,
  account_bank_code: string,
  account_name: string,
  account_no: string,
  account_verify_yn: string,
  avg_star: number,
  coin: number,
  del_yn: string,
  delivery_date: string,
  delivery_yn: string,
  dormant_yn: string,
  image_path: string,
  last_login_date: string,
  level: number,
  marketing_yn: string,
  mod_date: string,
  nick_name: string,
  noti_ban_time: string,
  noti_yn: string,
  push_yn: string,
  reg_date: string,
  stop_yn: string,
  user: number,
}

export interface DashboardNode {
  cnt_aa: number,
  cnt_ac: number,
  cnt_all: number,
  cnt_cb: number,
  cnt_ce: number,
  cnt_df: number,
  cnt_dp: number,
  cnt_ds: number,
  cnt_sp: number,
  cnt_sr: number,
  cnt_sw: number,
  delivery_user: number,
}
export interface Dashboard {
  delivery: DashboardNode,
  sending: DashboardNode,
}
export interface PaySetting {
  pay_minimum_price: number, //최소결제금액
  pay_minimum_topup: number, //최소충전금액
  pay_minimum_withdraw: number, //최소출금금액
  pay_rate: number, //수수료율
}
export interface SearchEvent {
  code: string,
  keyword: string,
}
export interface AreaList {
  [key:string]: string[]
}
export interface State {
  accessToken: string;
  deviceToken: string;
  appVersion: string;
  osTypeCode: string;
  userAgent: string;
  drawer: boolean;
  search: boolean;
  activeSlideIdx: number;
  pinClickId: number;
  searchEvent: SearchEvent;
  mydashboard: Dashboard;
  areaList: AreaList;
  profile: Profile;
  sending: Sending;
  sendingList: Sending[];
  dialogCroper: Dialogs;
  dialogMap: Dialogs;
  dialogAlert: Dialogs;
  dialogSnackbar: Dialogs;
  dialogTerms: Dialogs,
  dialogConfirm: Dialogs,
  loading: Loading,
  geolocation: GPS,
  myDeliveryList: any[],
  myDeliveryCnt: number,
  mySendingCnt: number,
  myRouteCnt: number,
  paySetting: PaySetting,
}
export function state() {
  return {
    accessToken: '',
    drawer: false,
    search: false,
    activeSlideIdx: 0,
    pinClickId: 0,
    myDeliveryList: [],
    myDeliveryCnt: 0,
    mySendingCnt: 0,
    myRouteCnt: 0,
    areaList: {},
    searchEvent: {
      code: '',
      keyword: '',
    },
    paySetting: {
      pay_minimum_price: 0,
      pay_minimum_topup: 0,
      pay_minimum_withdraw: 0,
      pay_rate: 0,
    },
    mydashboard: {
      delivery: {
        cnt_aa: 0,
        cnt_ac: 0,
        cnt_all: 0,
        cnt_cb: 0,
        cnt_ce: 0,
        cnt_df: 0,
        cnt_dp: 0,
        cnt_ds: 0,
        cnt_sp: 0,
        cnt_sr: 0,
        cnt_sw: 0,
        delivery_user: 0,
      },
      sending: {
        cnt_aa: 0,
        cnt_ac: 0,
        cnt_all: 0,
        cnt_cb: 0,
        cnt_ce: 0,
        cnt_df: 0,
        cnt_dp: 0,
        cnt_ds: 0,
        cnt_sp: 0,
        cnt_sr: 0,
        cnt_sw: 0,
        delivery_user: 0,
      }
    },
    profile: {
      account_bank: '',
      account_bank_code: '',
      account_name: '',
      account_no: '',
      account_verify_yn: '',
      avg_star: 0,
      coin: 0,
      del_yn: '',
      delivery_date: '',
      delivery_yn: '',
      dormant_yn: '',
      image_path: '',
      last_login_date: '',
      level: 0,
      marketing_yn: '',
      mod_date: '',
      nick_name: '',
      noti_ban_time: '',
      noti_yn: '',
      push_yn: '',
      reg_date: '',
      stop_yn: '',
      user: 0,
    },
    sending: {
      nick_name: '',
      c_image_path: '',
      c_nick_name: '',
      customer_user: 0,
      d_image_path: '',
      d_nick_name: '',
      delivery_comment: '',
      delivery_star: 0,
      delivery_user: 0,
      direct_pickup_yn: '',
      due_date: '',
      finish_addr: '',
      finish_addr_detail: '',
      finish_call: '',
      finish_desc: '',
      finish_name: '',
      finish_point: '',
      mission_code: '',
      id: 0,
      item_price: 0,
      item_size_code: '',
      mod_date: '',
      pickup_date: '',
      request_pickup_date: '',
      read_cnt: 0,
      read_user: 0,
      reg_date: '',
      sending_item: [],
      sending_price: 0,
      sending_talk_id: '',
      start_addr: '',
      start_addr_detail: '',
      start_desc: '',
      start_point: '',
      status_code: '',
      title: '',
      showInfoType: '',
    },
    sendingList: [],
    deviceToken: '',
    appVersion: '',
    osTypeCode: '',
    userAgent: '',
    loading: {
      loadingBus: [],
    },
    geolocation: {
      longitude: 0,
      latitude: 0,
    },
    dialogCroper: {
      active: '',
      positive: {
        name: '',
        click: () => {},
      },
      negative: {
        name: '',
        click: () => {},
      },
    },
    dialogMap: {
      active: '',
      positive: {
        name: '',
        click: () => {},
      },
      negative: {
        name: '',
        click: () => {},
      },
    },
    dialogTerms: {
      active: '',
      positive: {
        name: '',
        click: () => {},
      },
      negative: {
        name: '',
        click: () => {},
      },
    },
    dialogAlert: {
      active: '',
      title: '',
      msg: '',
      positive: {
        name: '',
        click: () => {},
      },
      negative: {
        name: '',
        click: () => {},
      },
    },
    dialogSnackbar: {
      active: '',
      title: '',
      msg: '',
      data: {},
      pin: false,
      userType: '',
      type: '',
      positive: {
        name: '',
        click: () => {},
      },
      negative: {
        name: '',
        click: () => {},
      },
    },
    dialogConfirm: {
      active: '',
      title: '',
      msg: '',
      overlay: true,
      overlayClose: true,
      positive: {
        name: '',
        click: () => {},
      },
      negative: {
        name: '',
        click: () => {},
      },
      request: {
        name: '',
        click: () => {},
      },
    },
  }
}
export const getMapPoint = (p: string) : string[] => {
  const point: RegExpMatchArray | null = p.match(/(\d{3}.\d+)\s(\d{2}.\d+)/g)
  return point![0].split(' ')
}
