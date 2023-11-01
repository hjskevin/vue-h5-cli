/**
 *  说明：该配置文件中，注释带有customize标记的为定制化功能，默认为不使用不开启的，
 *  后期有相同需求可先参考功能描述看是否满足需求。满足则开启。
 */

/* 自定义全局变量，此文件不编译 */
const config = {
  // 是否开启数据调试(正式环境必需设置为false)
  useConsole: true,
  // 首页小贴士内容
  indexNotice: '线上支付均为全额自费，暂不支持医保结算',
  // 默认机构代码 无锡二院：WXEYYB 达川妇幼：SC_DZFY
  hospCode: 'WXEYYB',
  // 医院信息(分院配置多个)
  hospInfo: [
    {
      id: 0,
      name: '无锡市第二人民医院',
      code: 'WXEYYB', // 机构代码
      fullName: '无锡二院-南院区',
      remark: '无锡市梁溪区中山路68-2号',
      coord: {
        // 坐标
        lat: '31.56887', // 纬度
        lng: '120.30522' // 经度
      },
      area: '南院区',
      orgCode: '1000200', // his机构代码
      imgSrc: 'area_icon',
      telephone: '0510-68562222'
    },
    {
      id: 1,
      name: '无锡市第二人民医院',
      code: 'WXEYBYQ', // 机构代码
      fullName: '无锡二院-北院区',
      remark: '无锡市梁溪区兴源北路585号',
      coord: {
        lat: '31.59179',
        lng: '120.29608'
      },
      area: '北院区',
      orgCode: '1000200B', // his机构代码
      imgSrc: 'area_icon1',
      telephone: '0510-68562222'
    }
  ],
  // 首页跳转地址
  indexUrl: 'https://weixin.jstxry.com/SC_BizVue_test/main.html',
  // dev
  baseCenterUrl: 'https://bpnav.mandalat.cn:5443/SC_CenterWeb_test/',
  // test
  baseHsopUrl: 'https://tcwx.mandalat.cn:8098/scbizweb_test/',
  appId: 'wx08d82231dd8d4dc3',
  // 登录注册需要的token,
  bindToken: '091qu91w3it5aZ2mOE3w3bV2Yw0qu91Q',
  // 用户登录后token
  beepUserToken: '823CB39CE34D4D0B9A1A003F13A80D66',
  authData: {
    // 授权所需信息
    BEEP_Ver_Name: 'wx_wx2h',
    Beep_ClientCode: '',
    Beep_ClientSecret: '',
    channel_id: '',
    device_type: ''
  },
  // 菜单配置信息 linkType：是否为外部链接 0：否 1：是
  menus: {
    top: [
      { name: '门诊预约', icon: 'reserve_register', href: '/opRegistration?registerType=preview', linkType: 0 },
      { name: '今日挂号', icon: 'today_register', href: '/opRegistration?registerType=today', linkType: 0 },
      // { name: '报告查询', icon: 'report_query', href: '/opReportQuery', linkType: 0 },
      { name: '取号签到', icon: 'offer_signin', href: '/opSignin', linkType: 0 },
      { name: '门诊缴费', icon: 'out_pay', href: '/outpatientPay', linkType: 0 }
    ],
    // 门诊
    out: [
      { id: 1, name: '报告查询', icon: 'report_query', href: '/opReportQuery', linkType: 0 },
      { id: 1, name: '预约记录', icon: 'reserve_record', href: '/opAppointRecord', linkType: 0 },
      { id: 1, name: '在线建档', icon: 'book_building', href: '/opFiling/opFiling?lastPage=index', linkType: 0 },
      { id: 1, name: '就诊人管理', icon: 'patient_manage', href: '/opFamilyManage', linkType: 0 },
      // { id: 1, name: '预约记录', icon: 'reserve_record', href: '/opAppointRecord', linkType: 0 },
      { id: 2, name: '一键核酸', icon: 'nucleic_acid', href: '/opNucleinFlow', linkType: 0 },
      { id: 2, name: '门诊流调', icon: 'out_survey', href: '/flowSurveyIndex', linkType: 0 },
      // { id: 2, name: '取号签到', icon: 'offer_signin', href: '/opSignin', linkType: 0 },
      { id: 2, name: '驾驶员体检', icon: 'driver_examination', href: '/driverExamination', linkType: 0 }, // 泰兴人民医院
      { id: 2, name: '江苏银行', icon: 'bank_pay', href: '/opBankPay', linkType: 0 },
      { id: 3, name: '多学科联合门诊', icon: 'multi_joint', href: '/opMultiJoint', linkType: 0 } // 无锡二院
    ],
    // 住院
    in: [
      { id: 1, name: '住院办理', icon: 'in_registration', href: '/inRegistration', linkType: 0 },
      { id: 1, name: '押金充值', icon: 'in_prepay', href: '/inPrepay', linkType: 0 },
      // 未测试，打开需谨慎
      { id: 1, name: '住院发票', icon: 'in_invoice', href: '/inInvoice', linkType: 0 },
      //未开发完成，打开需谨慎
      { id: 1, name: '住院报告', icon: 'in_hospital_report', href: '/inInvoice', linkType: 0 }
      // { id: 1, name: '住院办结', icon: 'in_closure', href: '/inClosure', linkType: 0 }
    ]
  },
  // 是否显示流调表（一键核酸、今日挂号）
  isShowFlowSurvey: false,
  // 挂号日期限制范围天数(改字段已废弃，无需修改。)
  dateRange: 14,
  // 支付类型信息 需配置payModeCode
  payTypeInfo: [
    {
      name: 'tlzf',
      payModeCode: 'tlzf',
      icon: 'pay_wx'
    },
    {
      name: '自费缴费',
      payModeCode: 'wexin', //注意 微信支付的payModeCode为wexin
      icon: 'pay_wx'
    },
    {
      name: '江苏银行支付',
      payModeCode: 'wxeyjsbank',
      icon: 'pay_wx'
    }
    // {
    //   name: '医保缴费',
    //   payModeCode: 'medicalPay',
    //   icon: 'pay_wx'
    // }
  ],
  // 是否启用医保支付
  isUseMedicalInsurance: false,
  // 不支持医保支付的提示
  isUseMedicalInsuranceTips: '该处方暂不支持使用线上医保支付，请至窗口办理缴费',
  //是否显示支付时弹窗提示 false：不显示
  isShowPayDialogTips: false,
  //支付提示时的文案
  payDialogTips: '线上支付均为全额支付，不支持医保结算。是否继续进行支付',
  //支付成功后获取支付结果的loading时间。默认3s
  payResultLoadingTime: 3,
  // 银行支付签约地址[无锡二院 江苏银行信用支付]
  bankPaySignUrl: 'https://yh.xailife.com/credit-hospital-h5',
  // bankPaySignUrl: 'https://mbank5h5.jsbchina.cn/mbank/page/indexH5Two.html#page/96/01/P9601.html?params=XXXX',
  // 预约须知弹框内容
  previewNoticeDialog:
    '1、3天内有外地非涉疫城市旅居史人员请提供24小时核酸阴性报告。<br/>' +
    '2、7天内有涉疫城市旅居史人员将根据预检分诊流调结果分诊发热门诊或专科' +
    '就诊。<br/>' +
    '3、其余人员请提供72小时核酸阴性报告或24小时采样证明。<br/>' +
    '4、口腔科部分诊疗项目，门诊小手术，胃肠镜等检查需提供24小时核酸阴性报告。<br/>',
  // 预约须知
  previewNotice:
    '1、预约方式： (1)、微信公众号预约：关注“无锡市第二人民医院”公众号进行预约（上午08:00开放下周号源，约完为止）；<br/>' +
    ' (2)、预约电话：0510-68562999、0510-68563999（周一至周日上午8:00-11:15<br/>' +
    ' 下午13:30-17:00，夏令时时间顺延，约完为止）。<br/>' +
    ' (3)、无锡二院门诊自助挂号机预约挂号，可提前挂取七天内所有专家门诊、普通门诊号（上午07:15开放下周号源，约完为止）；<br/>' +
    ' 2、上述预约方式均不收取任何手续费用。 3、提供次日起动态一周内的普通门诊、专家门诊预约挂号服务。<br/>' +
    ' 4、我院仅开设儿内科，14周岁以下儿童就诊其他专科请至市儿童医院。<br/>' +
    ' 5、预约挂号一律采用实名制，请在预约时详细提供就诊人的真实姓名、出生年月、身份证号码、联系电话、家庭住址、电子邮箱地址、单位名称、医保卡号码或就诊卡号等项，以便联系或核查。<br/>' +
    ' 6、预约成功后，请务必记住手机短信或电话预约操作人员提供给您的“预约流水号”。<br/>' +
    ' 7、请在预约就诊时间前半小时内凭预约流水号到各挂号收费处或自助服务机交费取号，按现场提供的次序至候诊区等待排队叫号系统喊号就诊。逾期未取号者，号源作废。<br/>' +
    ' 8、因故取消预约者，请在就诊前一天17:00前根据个人当时所选取的预约方式取消预约，如失约三次，将取消三个月内预约资格。<br/>' +
    ' 9、预约时请务必留下正确的联系电话，并保持畅通。如遇特殊情况停诊，医院将通过短信和电话双渠道及时告知患者。详情咨询0510-68563061。<br/>' +
    ' 10、医院保留预约挂号的最终解释权。',
  // 今日挂号须知
  todayNotice:
    '1、挂号方式： (1)、微信公众号预约：关注“无锡市第二人民医院”公众号进行预约（上午08:00开放下周号源，约完为止）；<br/>' +
    ' (2)、预约电话：0510-68562999、0510-68563999（周一至周日上午8:00-11:15<br/>' +
    ' 下午13:30-17:00，夏令时时间顺延，约完为止）。<br/>' +
    ' (3)、无锡二院门诊自助挂号机预约挂号，可提前挂取七天内所有专家门诊、普通门诊号（上午07:15开放下周号源，约完为止）；<br/>' +
    ' 2、上述预约方式均不收取任何手续费用。 3、提供次日起动态一周内的普通门诊、专家门诊预约挂号服务。<br/>' +
    ' 4、我院仅开设儿内科，14周岁以下儿童就诊其他专科请至市儿童医院。<br/>' +
    ' 5、预约挂号一律采用实名制，请在预约时详细提供就诊人的真实姓名、出生年月、身份证号码、联系电话、家庭住址、电子邮箱地址、单位名称、医保卡号码或就诊卡号等项，以便联系或核查。<br/>' +
    ' 6、预约成功后，请务必记住手机短信或电话预约操作人员提供给您的“预约流水号”。<br/>' +
    ' 7、请在预约就诊时间前半小时内凭预约流水号到各挂号收费处或自助服务机交费取号，按现场提供的次序至候诊区等待排队叫号系统喊号就诊。逾期未取号者，号源作废。<br/>' +
    ' 8、因故取消预约者，请在就诊前一天17:00前根据个人当时所选取的预约方式取消预约，如失约三次，将取消三个月内预约资格。<br/>' +
    ' 9、预约时请务必留下正确的联系电话，并保持畅通。如遇特殊情况停诊，医院将通过短信和电话双渠道及时告知患者。详情咨询0510-68563061。<br/>' +
    ' 10、医院保留预约挂号的最终解释权。',
  // 一键核酸说明须知
  nucleinExplain:
    '<p>从即日起，核酸检测服务<span style="color: #F93636 ">使用“灵锡” App</span>' +
    ' 进行检测扫码操作。请广大市民来院采样时使用“灵锡” App “扫一扫”门铃码，配合工作人员测温、查验健康码与行程码等，采样时出示缴费凭证和“灵锡” App 个人门铃码。' +
    '采样后 1 小时内手机终端显示核酸已采样， 12 小时内可在“灵锡’ , App 内查询结果，<span style="color: #F93636 ">不提供纸质报告。</span>' +
    '<br/>请确认您需要就诊的院区，选错院区将无法正常就诊（在南院区挂号/预约，只能到南院区就诊，<span style="color: #F93636 ">不可跨院区就诊</span>）</p>', // 核酸首页弹窗的文字内容，html文本
  // 一键核酸友情提示
  nucleinFriendlyReminder: '接种疫苗48小时内，不建议进行核酸检测。',
  // 一键核酸底部说明
  nucleinNotice: '如果已申请当日的核酸检测，但未付费的情况下。可以从「门诊缴费」入口进行缴费，无需再挂号。',
  // 工作列表
  professionList: [
    { value: '11', label: '国家公务员' },
    { value: '13', label: '专业技术人员' },
    { value: '17', label: '职员' },
    { value: '21', label: '企业管理人员' },
    { value: '24', label: '工人' },
    { value: '27', label: '农民' },
    { value: '31', label: '学生' },
    { value: '37', label: '现役军人' },
    { value: '51', label: '自由职业者' },
    { value: '54', label: '个体经营者' },
    { value: '70', label: '无业人员' },
    { value: '80', label: '退(离)休人员' },
    { value: '90', label: '其他' }
  ],
  // 预约成功提示
  visitNotice: '因疫情防控要求，到门诊就诊前务必做好三项准备；行程码和健康码，和48小时核酸检测报告。',
  // 电子发票，只显示南院区的(北院区有问题)
  EInvoiceChangeInfo: true,
  // 医院介绍
  hospIntro: {
    intro:
      '<p>无锡市第二人民医院始建于1908年，现为三级甲等综合医院，是无锡市红十字医院、无锡市老年病医院，南京医科大学附属无锡第二医院，南通大学无锡临床学院，设有无锡市神经外科研究所、无锡市临床检验中心。医院是国家级胸痛中心、国家高级卒中中心、无锡市危重症孕产妇救治中心，设有中国神经内镜培训基地（首批）、国家级博士后科研工作站、5个省市级院士工作站，是上海复旦大学附属中山医院-无锡二院医疗技术协作中心。</p><p>医院设南北两个院区，南院位于无锡市中山路68号，北院位于兴源北路585号，核定床位1800张，通过国家电子病历五级测评，取得了互联网医院认证。拥有员工2345人，具有高级专业技术资格人员623人，博士105人，其中博士后13人；享有国务院特殊津贴的专家7人，省、市有突出贡献的中青年专家9人，江苏省“六大人才高峰”高层次人才选拔培养对象12人，江苏省医学重点人才2人，江苏省双创博士2人；无锡市“太湖人才计划”顶尖医学专家团队3个、医学领军人才3人、医学高端人才5人，获批市“双百人才”31人，省“333工程”第五周期培养对象9人等。</p><p>现有江苏省临床重点专科18个（心血管内科、眼科、神经外科、皮肤科、泌尿外科、耳鼻咽喉科、普外科、肝胆外科、骨科、消化内科、神经内科、肿瘤科、重症医学科、麻醉科、检验科、影像科、病理科、呼吸与危重症医学科），省医学创新团队A类1个（泌尿外科），省医学创新团队（共建）2个（心血管内科、神经外科），市临床医学中心1个（泌尿外科），市医学重点学科1个（神经外科），市医学发展学科1个（普外科），市创新团队5个（眼科、麻醉科、重症医学科、耳鼻咽喉科、消化内科），市医学创新团队培养对象2个（药剂科、心血管内科），市临床重点专科8个（急诊医学科、风湿免疫科、老年科、内分泌科、口腔科、血液科、肾病学、药学部）。</p><p>近五年来，医院获全市卫生系统首个江苏省政府科技进步一等奖，及各类国家、省、市科技类成果奖55项；江苏省医学新技术引进奖80项，其中一等奖16项，二等奖64项；获得无锡市人民政府颁发最高奖励—无锡市腾飞奖3项；国家自然科学基金等国家级立项课题20项，省、市各类科研立项课题270项。作为主编发表医学专著25余部；发表专业论文5304篇，其中SCI收录515篇，中华级682篇，公开专利数943项。</p><p>医院先后荣获首批“全国百姓放心示范医院”、“全国医院文化建设先进单位”、“全国学习型组织先进单位”、“江苏省争创群众满意的窗口服务单位”、“全面改善医疗服务，推进医德医风建设专项行动先进单位”等。2018年在全省医疗服务明察暗访中位列全省三甲综合医院第一；获国家卫健委2015-2017进一步改善医疗服务行动计划优质服务“示范医院”、 获2020年国家卫健委医政医管局“改善医疗服务示范医院”称号；医院还获得全国医院后勤管理创新示范单位、中国健康促进与教育优秀实践基地、改善医疗服务创新医院。</p><p>无锡市第二人民医院这所开创无锡西医历史的百年名院，正在习近平新时代中国特色社会主义思想的指引下，深入学习贯彻“健康中国2030”规划纲要，紧紧围绕“办名院、建名科、增名医”的三名战略，强化科技强院、人才兴院的核心理念，打造一流学科、培养创新人才、夯实质量内涵、提升医疗技术、优化服务流程，统筹一院多区高质量发展，努力建设集医疗、科研、教育、预防、保健、康复为一体的现代化三甲综合医院，为无锡及周边地区人民提供高质量医疗服务，成为“强高富美”新无锡建设的争先者、创先者。</p>',
    guide:
      '无锡市第二人民医院全体医务人员愿为您提供最优质的服务和高质量的医疗技术，为方便您的就医，现将门诊基本情况介绍如下：<br/>' +
      '1、门诊挂号时间：<br/>' +
      '上午7:30—11:20；下午13:30—17:50（冬季13:00—17:20）<br/>' +
      '门诊开诊时间：<br/>' +
      '普通门诊：上午8:00—11:30；<br/>' +
      '下午14:00—18:00（冬季13:30—17:30）<br/>' +
      '专家门诊：上午8:15—11:30；<br/>' +
      '下午14:00—18：00（夏季15:00—18:00；冬季13:30—17:30）<br/>' +
      '2、就诊日请患者携带本人身份证、社保卡（或有效证件）在预约挂号时间前来我院取号缴费，取号后请到门诊各诊区的签到机上签到，等候电子屏叫号就诊。',
    tag: ['三级甲等', '综合']
  },
  // useridTest: 'ozm4_txjREsCdnZZ7HEGsphvLLqk' // userid openid 是否为测试的
  // userid openid 是否为测试的
  useridTest: false,
  // 核酸配置
  nucleinConfig: [
    {
      memo: '南院区(中山路),08:00-11:15 14:00-17:00',
      schedule: [
        { name: '常规混采', value: '-1|2116|0|WXEYYB|-1|核酸检测_4_3' },
        { name: '出境核酸', value: '-1|2116|0|WXEYYB|jwhs|核酸检测_20_1' },
        { name: '常规单采', value: '-1|2116|0|WXEYYB|-1|核酸检测_20_2' }
      ]
    },
    {
      memo: '北院区(兴源路),全天24小时',
      schedule: [
        { name: '常规混采', value: '-1|7039|0|WXEYBYQ|-1|核酸检测_4_3' },
        { name: '出境核酸', value: '-1|7039|0|WXEYBYQ|jwhs|核酸检测_20_1' },
        { name: '常规单采', value: '-1|7039|0|WXEYBYQ|-1|核酸检测_20_2' }
      ]
    }
  ],
  // 驾驶员体检配置（泰兴人民用）
  examinationConfig: [
    {
      memo: '南院区(中山路),08:00-11:15 14:00-17:00',
      schedule: [
        { name: '常规混采', value: '-1|2116|0|WXEYYB|-1|核酸检测_4_3' },
        { name: '出境核酸', value: '-1|2116|0|WXEYYB|jwhs|核酸检测_20_1' },
        { name: '常规单采', value: '-1|2116|0|WXEYYB|-1|核酸检测_20_2' }
      ]
    },
    {
      memo: '北院区(兴源路),全天24小时',
      schedule: [
        { name: '常规混采', value: '-1|7039|0|WXEYBYQ|-1|核酸检测_4_3' },
        { name: '出境核酸', value: '-1|7039|0|WXEYBYQ|jwhs|核酸检测_20_1' },
        { name: '常规单采', value: '-1|7039|0|WXEYBYQ|-1|核酸检测_20_2' }
      ]
    }
  ],
  // 驾驶员体检说明（泰兴人民用）
  examinationDesc: '请到门诊四楼驾驶员体检室就诊如需退费，请到收费窗口!',
  // 住院预交金（数量固定四个）
  inHospPrepay: ['500', '1000', '2000', '5000'],
  // 是否开启非身份证验证
  enableThirdCardAuth: true,
  //检验检查报告的查询模式 1:单系统查询模式(新模式) 2：多系统查询模式（旧模式）
  reportQueryMode: 1,
  // 应用首页是否启用灰色模式（重大事件需要开启）默认不开启
  isUseGrayBg: false,

  /**
   * oa编号：126044
   * 日期：2023-07-31
   * 功能描述：增加系统维护是否开启配置字段
   */
  // 是否开启系统维护
  isEnableSystemMaintain: false,
  // 系统维护提示语
  systemMaintainText: '系统升级中...',

  /**
   * customize
   * oa编号：127773
   * 日期：2023-08-16
   * 功能描述：新增联合门诊配置字段
   * 无锡二院所需功能
   */
  //是否显示多学科联合门诊页面提示dialog
  isShowDialogTips: true,
  //多学科联合门诊提示dialog是否需要显示取消按钮(默认只显示确定按钮)
  isShowConfirmButton: false,
  // 多学科联合门诊提示dialog内容
  manyProjectTipsContent: '弹窗内容',

  /**
   * customize
   * oa编号：129606
   * 日期：2023-09-13
   * 功能描述：地址选择器是否需要显示街道(true:显示，false：不显示)
   * 四川达州医院所需功能
   */
  isShowStreetChoose: true
}
