Ext.onReady(function () {
    app = IDACore();
    app.data = {
        krp: [{ "Id": "38047", "text": "Малые предприятия (6 - 10) (от 6 до 10 чел.)", "leaf": false, "children": null }, { "Id": "38048", "text": "Малые предприятия (11-15) (от 11 до 15 чел.)", "leaf": false, "children": null }, { "Id": "38049", "text": "Малые предприятия (16-20) (от 16 до 20 чел.)", "leaf": false, "children": null }, { "Id": "38050", "text": "Малые предприятия (21-30) (от 21 до 30 чел.)", "leaf": false, "children": null }, { "Id": "38051", "text": "Малые предприятия (31-40) (от 31 до 40 чел.)", "leaf": false, "children": null }, { "Id": "38052", "text": "Малые предприятия (41-50) (от 41 до 50 чел.)", "leaf": false, "children": null }, { "Id": "38053", "text": "Малые предприятия (51-100) (от 51 до 100 чел.)", "leaf": false, "children": null }, { "Id": "38054", "text": "Средние предприятия (101-150) (от 101 до 150 чел.)", "leaf": false, "children": null }, { "Id": "38055", "text": "Средние предприятия (151-200) (от 151 до 200 чел.)", "leaf": false, "children": null }, { "Id": "38056", "text": "Средние предприятия (201-250) (от 201 до 250 чел.)", "leaf": false, "children": null }, { "Id": "38057", "text": "Крупные предприятия (251-500) (от 251 до 500 чел.)", "leaf": false, "children": null }, { "Id": "38058", "text": "Крупные предприятия (501-1000) (от 501 до 1000 чел.)", "leaf": false, "children": null }, { "Id": "38046", "text": "Малые предприятия (<= 5) (от 0 до 5 чел.)", "leaf": false, "children": null }, { "Id": "38059", "text": "Крупные предприятия (&gt;1000) (от 1001 до 999999 чел.)", "leaf": false, "children": null }],
        okedmin: [{ "Id": "206426", "text": "Сельское хозяйство", "leaf": false, "children": null }, { "Id": "206427", "text": "Горнодобывающая промышленность", "leaf": false, "children": null }, { "Id": "206428", "text": "Услуги", "leaf": false, "children": null }, { "Id": "206430", "text": "Металлургическая промышленность", "leaf": false, "children": null }, { "Id": "206431", "text": "Обрабатывающая промышленость", "leaf": false, "children": null }, { "Id": "206432", "text": "Прочие (промышленность)", "leaf": false, "children": null }, { "Id": "206433", "text": "Строительство", "leaf": false, "children": null }],
        krpmin: [{ "Id": "206421", "text": "микро(от 0 до 5)", "leaf": false, "children": null }, { "Id": "206422", "text": "малый(от 6 до 100)", "leaf": false, "children": null }, { "Id": "206423", "text": "средний(от 101 до 250)", "leaf": false, "children": null }, { "Id": "206424", "text": "крупный(от 251 и больше)", "leaf": false, "children": null }],
        years: [{ "Id": "2015", "text": "2015 г." }, { "Id": "2016", "text": "2016 г." }, { "Id": "2017", "text": "2017 г." }]
    };
    app.strings.ru = {
        "RU": "RU",
        "EN": "EN",
        "Id": "Номер",
        "Additional information": "Дополнительные сведения",
        "Register": "Реестр предприятий",
        "NoData": "Нет объектов для отображения",
        "Paging": "Объекты {0} - {1} из {2}",
        "Page": "Страница",
        "From": "из {0}",
        "OnMap": "На карте",
        "Pasport": "Паспорт объекта",
        "PasportAll": "Сравнение объектов",
        "Values": "Свойства",
        "Name": "Наименование",
        "Value": "Значение",
        "Apply": "Применить",
        "Director": "ФИО руководителя",
        "KATO": "Район",
        "KATO_Code": "Код района",
        "City": "Населенный пункт",
        "OKED": "Вид деятельности",
        "OKED_2": "Вторичный вид деятельности",
        "OKED_Code": "Код вида деятельности",
        "CurrentStatus": "Текущий статус",
        "DateRegistration": "Дата регистрации",
        "Address": "Адрес",
        "BIN": "БИН",
        "KRP": "Категория",
        "KRP_Code": "Код КРП",
        "Status": "Статус",
        "Scoring": "Скоринг",
        "Find": "Найти",
        "Clear": "Очистить",
        "Licenses": "Лицензии",
        "LicenseNumber": "Номер лицензии",
        "LicenseUINRD": "УИНРД лицензии",
        "LicenseSeries": "Серия лицензии",
        "DateVydachi": "Дата выдачи",
        "LicenseStatus": "Статус лицензии",
        "Licenziar": "Лицензиар",
        "Srok_deistv_license": "Срок действия лицензии",
        "Srok_pr_license": "Срок приостановления лицензии",
        "Chart": "График",
        "GovSupport": "Гос. поддержка",
        "Tax": "Налоги",
        "Strength": "Численность",
        "Salary": "Заработная плата",
        "FilterExtra": "Расширенный фильтр",
        "Yes": "Да",
        "No": "Нет",
        "GCVP": "Показатели занятости",
        "Grid": "Реестр",
        "SimplePasport": "Паспорт",
        "ExtraPasport": "Расширенный паспорт",
        "Service_Provider": "Поставщик услуг",
        "ServicesUsed": "Потребители услуг",
        "Payer_status": "Статус",
        "Z13401": "Теплоснабжение",
        "Z13402": "Потребление горячей воды",
        "Z13403": "Потребление холодной питьевой воды",
        "Z13404": "Стоки",
        "Z13405": "Электроэнергия",
        "Analytics": "Аналитика",
        "AreaChart": "Вклад в регион",
        "Period": "Период",
        "TaxSum": "Сумма начисленных налогов",
        "PaidTaxSum": "Сумма оплаченных налогов",
        "SalaryAvg": "Средняя заработная плата",
        "EmplCount": "Количество работников",
        "CompanyAge": "Возраст компании",
        "Spider": "Сравнительный анализ",
        "Compare": "Сравнить",
        "AddToCart": "Добавить в сравнение",
        "RemoveFromCart": "Удалить из сравнения",
        "UL": "ЮЛ",
        "FL": "ФЛ",
        "Main": "Основные",
        "Attention": "Внимание",
        "NoElementsToCompare": 'Нет элементов для сравнения.',
        "CartIsEmpty": "Корзина уже пуста.",
        "Property_Names": "Наименования свойств",
        "Organisation": "Организация",
        "Count": "Количество",
        "MaxIsReached": "Максимальное количество сравниваемых объектов достигнуто.",
        "Year": "Год",
        "Certificate": "Сертификаты",
        "Gos": "Гос. поддержка",
        "Graph": "Показатели",
        "Date_reg": "Дата регистрации",
        "Date_expire": "Действителен до",
        "Certificate_Number": "Номер сертификата",
        "ops": "Орган по подтверждению соответствия",
        "N_T_B_of_products": "Наименование, тип, марка продукции",
        "Product_manufacturer": "Изготовитель продукции",
        "Comp_reg": "Соответствует требованиям",
        "Applicant": "Заявитель",
        "Basis_iss_cert": "Основание выдачи сертификата",
        "Rukov_OPS": "Руководитель ОПС",
        "Dop_Info": "Дополнительная информация",
        "Expert_auditor": "Эксперт - аудитор",
        "Certificate_type":	"Вид сертификата",
        "Detail": "Подробное описание",
        "GosZakup": "Гос. закуп",
        "GosZakupPostavshik": "Гос. закуп поставщик",
        "GosZakupZakazchik": "Гос. закуп заказчик",
        "GosUchrezhdenie": "Гос. учреждение",
        "GosZakupBoth": "Гос. закуп (Поставщик/Заказчик)",
        "supplier": "Поставщик",
        "supplier_biin": "БИН Поставщика",
        "customer": "Заказчик",
        "customer_bin": "БИН Заказчика",
        "sign_date": "Дата заключения договора",
        "ec_end_date": "Срок действия договора",
        "plan_exec_date": "Планируемая дата исполнения",
        "fakt_exec_date": "Фактическая дата исполнения",
        "contract_sum_wnds": "Общая сумма договора, тенге",
        "fakt_sum_wnds": "Общая фактическая сумма договора",
        "description_ru": "Предмет договора",
        "ref_contract_status": "Статус договора",
        "GosZakupSelf": "В качестве заказчика",
        "GosZakupNotSelf": "В качестве поставщика",
        "Date":	"Дата",
        "Year":	"Год",
        "Support_type":	"Вид поддержки",        
        "CP_Z272101":	"Сумма поддержки, тыс. тг",        
        "CP_Z272102":	"Общая сумма гарантии, тыс. тг", 
        "Program_Name":	"В рамках какой программы выделяется субсидия",
        "Checks": "Проверка государственных органов",
        "CP_BIN": "БИН",
        "CP_Subject_Name": "Наименование проверяемого субъекта",
        "CP_Name_prov_object": "Наименование проверяемого объекта",
        "CP_Date_prov_Subject": "Дата государственной регистрации проверяемого субъекта в органах юстиции",
        "CP_Risk_group": "Группа риска",
        "CP_Category_pred": "Категория предпринимательства проверяемого субъекта",
        "CP_Prov_Gos_Organ": "Государственные проверяющие органы",
        "GeoMap": "Карта",
        "RoadMap": "Дорожная карта бизнеса 2020",
        "AgroBusiness": "Агробизнес 2020",
        "APK": "АПК 2017-2021",
        "Other": "Прочее",
        "All": "Все",
        "Zakup": "Госзакупки",
        "ZakupkiCustomer": "Закупки (заказчик)",
        "ZakupkiSupplier": "Закупки (поставщик)",
        "GosZakupFBN": "Закупки ФНБ СК",
        "GosZakupFBNFilter": "Закупки ФНБ",
        "GosZakupNadlok": "Закупки ТРУ, используемых при проведении операций по недропользованию",
        "GosZakupNadlokFilter": "Закупки НАДЛОК",
        "Name_Customer": "Наименование заказчика",
        "Name_Supplier": "Наименование поставщика",
        "Legal_Address": "Юридический адрес",
        "isMSB": "Субъект МСБ",
        "isDCP": "Отечественный товаропроизводитель",
        "year": "Год поставки",
        "Customer": "Заказчик",
        "deal_number": "Номер договора",
        "deal_date": "Дата заключения договора",
        "sum_deal_wnds": "Общая сумма договора без учета НДС, тыс. тенге",
        "Supplier": "Поставщик",
        "TRU_Name": "Описание ТРУ",
        "Volume_of_purchase": "Объем закупа в натуральном выражении",
        "purchase_sum_wtnds": "Объем закупа без учета НДС в стоимостном выражении, тыс. тенге",
        "Quarter": "Квартал",
        "Treatment": "Обращения",
        "Meet": "Встреча",
        "Contacts": "Контакты",
        "Comments": "Комментарий",
        "Address": "Адрес",
        "Number treatment": "Номер обращения",
        "Answer": "Ответ",
        "Add more": "Добавить еще",
        "Clear": "Очистить",
        "Send": "Отправить",
        "Date": "Дата",
        "Time": "Время",
        "Description": "Описание",
        "Phone number": "Телефон номер",
        "Post": "Почта",
        "Title": "Заголовок",
        "Update": "Редактировать",
        "Delete": "Удалить",
        "Create": "Создать",
        "User": "Пользователь",
        "Dimension": "Размерность",
        "Street": "Улица",
        "House": "Дом",
        "CountApartmentAP": "Количество квартир в АР",
        "CountApartmentPH": "Количество квартир в РН",
        "NumberOf": "№",
        "Korpus": "Корпус",
        "Apartment": "Квартира",
        "CountOfRegistered": "Количество зарегистрированных, чел",
        "FIO_M": "ФИО матери",
        "FIO_F": "ФИО отца",
        "IIN_M": "ИИН матери",
        "IIN_F": "ИИН отца",
        "NumOfChildren": "Количество детей",
        "Count_Children": "Количество детей",
        "IPNFor2018": "ИПН за 2018",
        "IPNFor2019": "ИПН за 2019",
        "PensionContributionsFor2018": "Пенсионные очистление за 2018",
        "PensionContributionsFor2019": "Пенсионные очистление за 2018",
        "AverageNominalWage": "Cредняя номинальная заработная плата",
        "CoefficientFor2018": "Коэффициент за 2018",
        "CoefficientFor2019": "Коэффициент за 2019",
        "CountOfWorkersFor2018" : "Количество работников за 2018",
        "CountOfWorkersFor2019" : "Количество работников за 2019",
        "DateBirth" : "Дата рождения",
        "IIN": "ИИН",
        "Nnedv2":"Список недвижимости, предположительно не введенных в эксплуатацию",
        "Ultrudoustr":"Список ЮЛ, предположительно работающих без официального трудоустройства работников",
        "Ulnalogi":"Список ЮЛ, предположительно занижающие налоговые отчисления ",
        "Layermotherdata":"Профиль многодетных семей",
        "RezKv": "Список объектов недвижимости, в которых количество официально проживающих превышает 10 человек",
        "KKM_title": "Список адресов с превышением ККМ количества организаций",
        "ReestrNotStatusTitle": "Лица без статусов",
        "NewErc": "Список новых зарегистрированных адресов ЕРЦ",
        "Vakancy": "Востребованные специальности",
        "CountRegisterKKM": "Количество регистр ККМ",
        "CountOrgAddress": "Количество организация по адресу",
        "Category": "Категория",
        "Vacancy": "Вакансия",
        "CountVacancy": "Количество",
        "IinLitsBezStatus": "ИИН лиц без статусов",
        "FioLitsBezStatus": "ФИО лиц без статусов",
        "AddressLitsBezStatus": "Адрес лиц без статусов",
        "PhoneLitsBezstatus": "Телефон лиц без статуса",
        "FioSojitel": "ФИО со жителей",
        "AddressSojitel": "Адрес сожителя",
        "BinMestoRabot": "БИН места работы",
        "NameMestoRabot": "Наименование места работы",
        "IinSojitel": "ИИН сожителя",
        "Year": "Год",
        "Month": "Месяц",
        "NumberRegisteredApartments": "Количество зарегистрированных квартир",
        "PresenceInformationData": "Наличие информации в данных УАГЗО",
        "AvailabilityConsumptionInformation": "Наличие информации о потреблении",
        "KKM": "Количество ККМ",
        "": ""
    };
    app.strings.en = {
        "RU": "RU",
        "EN": "EN",
        "Additional information": "Additional information",
        "Register": "Enterprise Register",
        "NoData": "There are no objects to display",
        "Paging": "Objects {0} - {1} of {2}",
        "Page": "Page",
        "From": "from {0}",
        "OnMap": "On map",
        "Pasport": "Object Passport",
        "PasportAll": "Comparison of objects",
        "Values": "Properties",
        "Name": "Name",
        "Value": "Value",
        "Apply": "Apply",
        "Director": "Leader",
        "KATO": "Region",
        "City": "Locality",
        "OKED": "Type of economic activity",
        "CurrentStatus": "Current status",
        "DateRegistration": "Date of registration",
        "Address": "Address",
        "BIN": "BIN",
        "KRP": "Category",
        "Status": "Status",
        "Scoring": "Scoring",
        "Find": "Find",
        "Clear": "Clear",
        "Licenses": "Licenses",
        "LicenseNumber": "License number",
        "LicenseUINRD": "UINRD license",
        "LicenseSeries": "License series",
        "DateVydachi": "Date of issue",
        "LicenseStatus": "License status",
        "Licenziar": "Licensor",
        "Srok_deistv_license": "License period",
        "Srok_pr_license": "Term of license suspension",
        "Chart": "Graph",
        "GovSupport": "State support",
        "Tax": "Taxes",
        "Strength": "Number of employed",
        "Salary": "Salary",
        "FilterExtra": "Advanced filter",
        "Yes": "Yes",
        "No": "No",
        "GCVP": "Pension contributions",
        "Grid": "Registry",
        "SimplePasport": "Pasport",
        "ExtraPasport": "Extended Passport",
        "Service_Provider": "Service Provider",
        "ServicesUsed": "Service consumers",
        "Payer_status": "Status",
        "Z13401": "Heat supply",
        "Z13402": "Hot water consumption",
        "Z13403": "Consumption of cold drinking water",
        "Z13404": "Drains",
        "Z13405": "Electricity",
        "Analytics": "Analytics",
        "AreaChart": "Share in the region",
        "Period": "Period",
        "TaxSum": "Amount of accrued taxes",
        "PaidTaxSum": "Amount of taxes paid",
        "SalaryAvg": "Average salary",
        "EmplCount": "Amount of workers",
        "CompanyAge": "Company age",
        "Spider": "Comparative analysis",
        "Compare": "Compare",
        "AddToCart": "Add to comparison",
        "RemoveFromCart": "Remove from comparison",
        "UL": "LP",
        "FL": "IP",
        "Main": "Main",
        "Attention": "Attention",
        "NoElementsToCompare": 'No items to compare.',
        "CartIsEmpty": "The cart is already empty.",
        "Property_Names": "Property Names",
        "Organisation": "Oragnisation",
        "Count": "Amount",
        "MaxIsReached": "Maximum number of compared objects reached.",
        "Year": "Year",
        "Certificate": "Certificates",
        "Gos": "State institution",
        "Graph": "Indicators",
        "Date_reg": "Registration date",
        "Date_expire": "Valid until",
        "Certificate_Number": "Certificate number",
        "ops": "Conformity confirmation body",
        "N_T_B_of_products": "Name, type, brand of product",
        "Product_manufacturer": "Product manufacturer",
        "Comp_reg": "Meets requirements",
        "Applicant": "Applicant",
        "Basis_iss_cert": "The basis for issuing a certificate",
        "Rukov_OPS": "Leader of OPS",
        "Dop_Info": "Additional Information",
        "Expert_auditor": "Expert Auditor",
        "Certificate_type": "Type of certificate",
        "Detail": "Detailed description",
        "GosZakup": "State procurement",
        "GosZakupPostavshik": "State procurement supplier",
        "GosZakupZakazchik": "State procurement customer",
        "GosUchrezhdenie": "State support",
        "GosZakupBoth": "State procurement (Supplier/Customer)",
        "supplier": "Supplier",
        "supplier_biin": "Supplier BIN",
        "customer": "Customer",
        "customer_bin": "Customer BIN",
        "sign_date": "Contract date",
        "ec_end_date": "Contract time",
        "plan_exec_date": "Planned date of performance",
        "fakt_exec_date": "Actual due date",
        "contract_sum_wnds": "Total amount of the contract, tenge",
        "fakt_sum_wnds": "Total actual contract amount",
        "description_ru": "Subject of the Contract",
        "ref_contract_status": "Contract status",
        "GosZakupSelf": "As customer",
        "GosZakupNotSelf": "As a supplier",
        "Date": "Date",
        "Year": "Year",
        "Support_type": "Type of support",
        "CP_Z272101": "Amount of support, ths. tenge",
        "CP_Z272102": "Total amount of guarantee, ths. tenge",
        "Program_Name": "Under which program is the grant allocated",
        "CP_BIN": "BIN",
        "CP_Subject_Name": "Name of the subject to be verified",
        "CP_Name_prov_object":	"Name of the object being checked",
        "CP_Date_prov_Subject": "Date of state registration of the inspected subject in the justice authorities",
        "CP_Risk_group": "Risk group",
        "CP_Category_pred": "Business category of the inspected subject",
        "CP_Prov_Gos_Organ": "State inspection bodies",
        "GeoMap": "Map",
        "RoadMap": "Roadmap Business 2020",
        "AgroBusiness": "Agribusiness 2020",
        "APK": "APK 2017-2021",
        "Other": "Other",
        "All": "All",
        "Zakup": "Purchases",
        "GosZakupFBN": "National welfare fund",
        "Name_Customer": "Customer Name",
        "Name_Supplier": "Supplier name",
        "Legal_Address": "Legal address",
        "isMSB": "SMB subject",
        "isDCP": "Domestic commodity producer",
        "year": "Year of delivery",
        "Customer": "Customer",
        "deal_number": "Deal Number",
        "deal_date": "Contract date",
        "sum_deal_wnds": "Total amount of the contract excluding VAT, thous. Tenge",
        "Supplier": "Supplier",
        "TRU_Name": "Description of Product",
        "Volume_of_purchase": "Volume of purchases in natural terms",
        "purchase_sum_wtnds": "Volume of purchase excluding VAT in terms of value, thous. Tenge",
        "Quarter": "Quarter",
        "User": "User",
        "": ""
    };
    app.create = function () {
        app.elements.viewport = Ext.create('Ext.container.Viewport', {
            layout: "border"
        });
        app.elements.typeSelectorBar = Ext.create("Ext.panel.Panel", {
            height: 40,
            layout: "hbox",
            dock: "top",
            defaults: {
                xtype: "radiogroup"                
            },
            bodyPadding: 5,
            items: [
                {
                    xtype: "image",
                    src: 'assets/img/home.png',
                    width: 30,
                    height: 30,
                    margin: '0 10 0 15',
                    listeners: {
                        el: {
                            click: app.handlers.homeClick
                        }
                    },
                    style: 'cursor: pointer',
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: 'tbfill',
                    hideable: true,
                    hidden: true
                },
                {
                    autoHeight: true,
                    width: 150,
                    items: [
                        {
                            boxLabel: app.locale("UL"),
                            name: 'statusType',
                            inputValue: 0,
                            checked: true
                        },
                        {
                            boxLabel: app.locale("FL"),
                            name: 'statusType',
                            inputValue: 1                            
                        }
                    ],
                    listeners: {
                        change: app.handlers.typeSelectorChange
                    },
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "combobox",
                    store: Ext.create("Ext.data.Store", {
                        data: [
                            { "id": "ru", "name": app.locale("RU") },
                            { "id": "en", "name": app.locale("EN") }
                        ]
                    }),
                    id: "langSelector",
                    editable: false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    concept: "Language",
                    width: 70,
                    listeners: {
                        select: app.handlers.langChange,
                        afterrender: function () {
                            this.setValue(app.lang);
                        }
                    },
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "label",
                    width: 180,
                    style: 'padding-right: 5px; padding-left: 5px;',
                    hideable: true,
                    hidden: true
                },
            ]                
        });
        app.elements.filterbar = Ext.create("Ext.panel.Panel", {
            height: 40,
            layout: "hbox",
            dock: "top",
            defaults: {
                xtype: "button",
                width: 150,
                margin: "5 5 5 5",
                handler: app.handlers.filterbtnclick
                //handler: (a, b) => { console.log(a.concept); console.log(b); }
            },
            items: [
                {
                    text: app.locale("KATO"),
                    id: 'KATO',
                    concept: "KATO",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("OKED"),
                    concept: "OKED",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("KRP"),
                    concept: "KRP",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("GovSupport"),
                    concept: "ItemType",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("CurrentStatus"),
                    concept: "CurrentStatus",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("Dimension"),
                    concept: "KRP",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("CurrentStatus"),
                    concept: "STATUS",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("KKM"),
                    concept: "KKM",
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "tbfill",
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "label",
                    width: 300,
                    style: 'text-align:right; padding-right: 5px',
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "image",
                    src: 'assets/img/cart.png',
                    width: 23,
                    height: 23,
                    margin: '0 0 0 15',
                    listeners: {
                        el: {
                            click: app.handlers.onCartClick
                        }
                    },
                    style: 'cursor: pointer',
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "label",
                    width: 30,
                    style: 'text-align:left; padding-right: 5px',
                    text: '0/5',
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "image",
                    src: 'assets/img/empty.png',
                    width: 23,
                    height: 23,
                    margin: '0 15 0 15',
                    listeners: {
                        el: {
                            click: app.handlers.clearCart
                        }
                    },
                    style: 'cursor: pointer',
                    hideable: true,
                    hidden: true
                }
            ]
        });
        app.elements.filteritembar = Ext.create("Ext.panel.Panel", {
            height: 60,
            html: "<div id='filteritems'></div>"
        });
        app.elements.filterextrabar = Ext.create("Ext.panel.Panel", {
            hidden: true,
            height: 120,
            bodyPadding: 10,
            layout: {
                type: "table",
                columns: 12
            },
            dock: "top",
            defaults: {
                xtype: "multislider",
                width: 230,
                margin: "5 5 5 5",
                constrainThumbs: false
            },
            items: [                
                {
                    xtype: "label",
                    text: app.locale("Tax") + ":",
                    colspan: 2
                },
                {
                    xtype: "label",
                    text: app.locale("Strength") + ":",
                    colspan: 2
                },
                {
                    xtype: "label",
                    text: app.locale("Salary") + ":",
                    colspan: 2
                },
                {
                    xtype: "label",
                    text: app.locale("Licenses") + ":"
                },
                {
                    xtype: "label",
                    text: app.locale("Certificate") + ":"
                },
                {
                    xtype: "label",
                    text: app.locale("GosUchrezhdenie") + ":"
                },
                {
                    xtype: "label",
                    text: app.locale("GosZakup") + ":"
                },
                {
                    xtype: "label",
                    text: app.locale("GosZakupFBNFilter") + ":"
                },
                {
                    xtype: "label",
                    text: app.locale("GosZakupNadlokFilter") + ":"
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 10000000,
                    concept: "TaxMin",
                    width: 110
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 10000000,
                    concept: "TaxMax",
                    width: 110
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 1000,
                    concept: "StrengthMin",
                    width: 110
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 1000,
                    concept: "StrengthMax",
                    width: 110
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 500000,
                    concept: "SalaryMin",
                    width: 110
                },
                {
                    xtype: 'numberfield',
                    minValue: 0,
                    maxValue: 500000,
                    concept: "SalaryMax",
                    width: 110
                },
                {
                    xtype: "combobox",
                    store: Ext.create("Ext.data.Store", {
                        data: [
                            { "id": 1, "name": app.locale("Yes") },
                            { "id": 0, "name": app.locale("No") }
                        ]
                    }),
                    editable: false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    concept: "License",
                    width: 100
                },
                {
                    xtype: "combobox",
                    store: Ext.create("Ext.data.Store", {
                        data: [
                            { "id": 1, "name": app.locale("Yes") },
                            { "id": 0, "name": app.locale("No") }
                        ]
                    }),
                    editable: false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    concept: "Certificate",
                    width: 120
                },
                {
                    xtype: "combobox",
                    store: Ext.create("Ext.data.Store", {
                        data: [
                            { "id": 1, "name": app.locale("Yes") },
                            { "id": 0, "name": app.locale("No") }
                        ]
                    }),
                    editable: false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    concept: "GosUchrezhdenie",
                    width: 120
                },
                {
                    xtype: "combobox",
                    store: Ext.create("Ext.data.Store", {
                        data: [
                            { "id": 1, "name": app.locale("Yes") },
                            { "id": 0, "name": app.locale("No") }
                        ]
                    }),
                    editable: false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    concept: "GosZakup",
                    width: 100
                },
                {
                    xtype: "combobox",
                    store: Ext.create("Ext.data.Store", {
                        data: [
                            { "id": 1, "name": app.locale("Yes") },
                            { "id": 0, "name": app.locale("No") }
                        ]
                    }),
                    editable: false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    concept: "GosZakupFBN",
                    width: 100
                },
                {
                    xtype: "combobox",
                    store: Ext.create("Ext.data.Store", {
                        data: [
                            { "id": 1, "name": app.locale("Yes") },
                            { "id": 0, "name": app.locale("No") }
                        ]
                    }),
                    editable: false,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    concept: "GosZakupNadlok",
                    width: 100
                },
                {
                    concept: "Tax",
                    values: [0, 10000000],
                    increment: 10000,
                    minValue: 0,
                    maxValue: 10000000,
                    colspan: 2,
                    listeners: {
                        change: app.handlers.sliderchange
                    }
                },
                {
                    concept: "Strength",
                    values: [0, 1000],
                    increment: 100,
                    minValue: 0,
                    maxValue: 1000,
                    colspan: 2,
                    listeners: {
                        change: app.handlers.sliderchange
                    }
                },
                {
                    concept: "Salary",
                    values: [0, 500000],
                    increment: 10000,
                    minValue: 0,
                    maxValue: 500000,
                    colspan: 2,
                    listeners: {
                        change: app.handlers.sliderchange
                    }
                }
            ]
        });
        app.elements.btnbar = Ext.create("Ext.panel.Panel", {
            height: 50,
            layout: "hbox",
            dock: "top",
            defaults: {
                xtype: "button",
                width: 150,
                margin: "10 10 10 10"
            },
            items: [
                {
                    xtype: "textfield",
                    width: 300,
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("Find"),
                    handler: app.handlers.searchbtnclick,
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("Clear"),
                    handler: app.handlers.clearbtnclick,
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("FilterExtra"),
                    handler: app.handlers.filterextrabtnclick,
                    hideable: true,
                    hidden: true
                },
                {
                    xtype: "tbfill",
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("OnMap"),
                    handler: app.handlers.modebtnclick,
                    hideable: true,
                    hidden: true
                },
                {
                    text: app.locale("AreaChart"),
                    margin: "10 30 10 10",
                    menu: [
                        {
                            text: "ВРП",
                            handler: app.handlers.areachartbtnclick,
                            hidden: true
                        },
                        {
                            text: app.locale("EmplCount"),
                            handler: () => app.handlers.EmplCountAreachartbtnclick(null, false)
                        },
                        {
                            text: app.locale("GovSupport"),
                            handler: () => app.handlers.GovSupportAreachartbtnclick(null, false)
                        },
                        {
                            text: app.locale("GosZakup"),
                            handler: app.handlers.GosZakupAreachartbtnclick
                        }
                    ],
                    hideable: true,
                    hidden: true
                }
            ]
        });

        app.elements.store = Ext.create("Ext.data.Store", {
            fields: ["Id", "KATO", "Name", "BIN", "Director", "OKED", "KRP", "DateRegistration",
                "Address", "KATORu", "KrpRu", "OkedRu", "Oked2", "FioMother", "FioFather", "DateBirth", "IIN",
            "IIN_F", "NumberOf", "KKM"],
            autoLoad: false,
            remoteFilter: true,
            remoteSort: true,
            pageSize: 100,
            filters: [{
                property: 'IE_check',
                value: 0
            }],
            sorters: [{
                property: 'DateRegistration',
                direction: 'desc'
            }],
            proxy: {
                type: "ajax",
                url: 'api/register',
                actionMethods: {
                    read: "POST"
                },
                timeout: 60000,
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                    root: 'objects',
                    totalProperty: 'count'
                }
            },
            listeners: {
                load: function (record, store) {
                    app.handlers.storeload();
                    if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 3) { //LayerMoother //t4 //Main 3
                        app.buffer.hidden = record.data.items[0].data.hidden;
                        app.buffer.main = 3;

                        app.elements.btnbar.hide();

                        app.elements.typeSelectorBar.hide();

                        //app.elements.filteritembar.hide();

                        app.elements.filterbar.hide();

                        app.elements.DoubleGridPanel.items.items[1].hide();

                        var title = app.locale("Layermotherdata");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "Address",
                                text: app.locale("Address"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "FioMother",
                                text: app.locale("FIO_M"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "FioFather",
                                text: app.locale("FIO_F"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            }, 
                            {
                                dataIndex: "DateBirth",
                                text: app.locale("DateBirth"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "IIN",
                                text: app.locale("IIN_M"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            }, 
                            {
                                dataIndex: "IIN_F",
                                text: app.locale("IIN_F"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "NumOfChildren",
                                text: app.locale("NumOfChildren"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 2) {
                        app.buffer.hidden = record.data.items[0].data.hidden;
                        app.buffer.main = 2;
                        var title = app.locale("Register");//"Список недвижимости, предположительно не введенных в эксплуатацию";
                        app.helpers.changeTitle(title);
                        for (var i = 0; i < 7; i++) {
                            if (i == 3 || i == 5 || i == 6) {
                                app.elements.btnbar.items.items[i].setHidden(true);
                            }
                            else {
                                app.elements.btnbar.items.items[i].setHidden(false);
                            }
                        }

                        app.elements.typeSelectorBar.hide();

                        //app.elements.filteritembar.hide();
                        for (var i = 0; i < 11; i++) {
                            if (i == 2 || i == 3 || i == 4 || i == 8 || i == 9 || i == 10) {
                                app.elements.filterbar.items.items[i].setHidden(true);
                            }
                            else {
                                app.elements.filterbar.items.items[i].setHidden(false);
                            }
                        }

                        app.elements.DoubleGridPanel.items.items[1].hide();
                        var gridLength = app.elements.grid.columns.length;
                        var appElementGrid = app.elements.grid;

                        appElementGrid.setColumns([
                            {
                                dataIndex: "BIN",
                                text: app.locale("Pasport"),
                                flex: 1,
                                renderer: function (value) {
                                    //return '<a target="_blank" class="reportlink" href="api/report?bin=' + value + '">' + app.locale("SimplePasport") + '</a>'+
                                    //'<br/><a target="_blank" class="reportlink" href="api/report?code=Pasport2&bin=' + value + '">' + app.locale("ExtraPasport") + '</a>';
                                    return '<a target="_blank" class="reportlink" href="api/report?code=Pasport2&bin=' + value + '">' + app.locale("SimplePasport") + '</a>';
                                },
                                hideable: true,
                                hidden: true
                            },
                            {
                                dataIndex: "Name",
                                text: app.locale("Name"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "BIN",
                                text: app.locale("BIN"),
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "KATORu",
                                text: app.buffer.main === 1 ? app.locale("City") : app.locale("KATO"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Address",
                                text: app.locale("Address"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Director",
                                text: app.locale("Director"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "OkedRu",
                                text: app.buffer.main === 1 ? app.locale("OKED") : app.locale("OKED"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "DateRegistration",
                                text: app.locale("DateRegistration"),
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CurrentStatus",
                                text: app.locale("CurrentStatus"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "KKM",
                                text: app.locale("KKM"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 1) {
                        app.elements.filterbar.items.items[5].hide();
                        app.buffer.main = 1;
                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "BIN",
                                text: app.locale("Pasport"),
                                flex: 1,
                                renderer: function (value) {
                                    //return '<a target="_blank" class="reportlink" href="api/report?bin=' + value + '">' + app.locale("SimplePasport") + '</a>'+
                                    //'<br/><a target="_blank" class="reportlink" href="api/report?code=Pasport2&bin=' + value + '">' + app.locale("ExtraPasport") + '</a>';
                                    return '<a target="_blank" class="reportlink" href="api/report?code=Pasport2&bin=' + value + '">' + app.locale("SimplePasport") + '</a>';
                                },
                                hideable: true,
                                hidden: true
                            }, 
                            {
                                dataIndex: "Name",
                                text: app.locale("Name"),
                                cellWrap: true,
                                flex: 2,
                                hideable: true,
                            }, 
                            {
                                dataIndex: "BIN",
                                text: app.locale("BIN"),
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "KATO",
                                text: app.buffer.main === 1 ? app.locale("City") : app.locale("KATO Code"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Address",
                                text: app.locale("Address"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Director",
                                text: app.locale("Director"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "OKED",
                                text: app.buffer.main === 1 ? app.locale("OKED") : app.locale("OKED Code"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "DateRegistration",
                                text: app.locale("DateRegistration"),
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "KRP",
                                text: app.locale("KRP"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "GovSupport",
                                text: app.locale("GovSupport"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CurrentStatus",
                                text: app.locale("CurrentStatus"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 4) {
                        app.buffer.main = 4;

                        app.elements.btnbar.hide();
                        app.elements.typeSelectorBar.hide();
                        //app.elements.filteritembar.hide();

                        app.elements.DoubleGridPanel.items.items[1].hide();

                        app.elements.filterbar.hide();

                        app.elements.DoubleGridPanel.items.items[1].hide();

                        var title = app.locale("Ulnalogi");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "Name",
                                text: app.locale("Name"),
                                cellWrap: true,
                                flex: 2,
                                hideable: true,
                            },
                            {
                                dataIndex: "BIN",
                                text: app.locale("BIN"),
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Dimension",
                                text: app.locale("Dimension"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "IPNFor2018",
                                text: app.locale("IPNFor2018"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "PensionContributionsFor2018",
                                text: app.locale("PensionContributionsFor2018"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "IPNFor2019",
                                text: app.locale("IPNFor2019"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "PensionContributionsFor2019",
                                text: app.locale("PensionContributionsFor2019"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "AverageNominalWage",
                                text: app.locale("AverageNominalWage"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CoefficientFor2018",
                                text: app.locale("CoefficientFor2018"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CoefficientFor2019",
                                text: app.locale("CoefficientFor2019"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 5) { //nedv2
                        app.buffer.main = 5;

                        app.buffer.hidden = record.data.items[0].data.hidden;
                        app.elements.typeSelectorBar.hide();
                        //app.elements.filteritembar.hide();
                        app.elements.filterbar.hide();
                        app.elements.btnbar.hide();
                        app.elements.DoubleGridPanel.items.items[1].hide();

                        var title = app.locale("Nnedv2");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "Street",
                                text: app.locale("Street"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "House",
                                text: app.locale("House"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CountApartmentAP",
                                text: app.locale("CountApartmentAP"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CountApartmentPH",
                                text: app.locale("CountApartmentPH"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 6) {
                        app.buffer.main = 6;

                        app.elements.btnbar.hide();
                        app.elements.typeSelectorBar.hide();

                        //app.elements.filteritembar.hide();
                        app.elements.filterbar.hide();

                        app.elements.DoubleGridPanel.items.items[1].hide();

                        var title = app.locale("Ultrudoustr");
                        app.helpers.changeTitle(title);
                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "Name",
                                text: app.locale("Name"),
                                cellWrap: true,
                                flex: 2,
                                hideable: true,
                            },
                            {
                                dataIndex: "BIN",
                                text: app.locale("BIN"),
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Dimension",
                                text: app.locale("Dimension"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "IPNFor2018",
                                text: app.locale("IPNFor2018"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "PensionContributionsFor2018",
                                text: app.locale("PensionContributionsFor2018"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "IPNFor2019",
                                text: app.locale("IPNFor2019"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "PensionContributionsFor2019",
                                text: app.locale("PensionContributionsFor2019"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "AverageNominalWage",
                                text: app.locale("AverageNominalWage"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CoefficientFor2018",
                                text: app.locale("CoefficientFor2018"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CoefficientFor2019",
                                text: app.locale("CoefficientFor2019"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CountOfWorkersFor2018",
                                text: app.locale("CountOfWorkersFor2018"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CountOfWorkersFor2019",
                                text: app.locale("CountOfWorkersFor2019"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 7) {
                        app.buffer.main = 7;

                        app.elements.btnbar.hide();

                        app.elements.typeSelectorBar.hide();

                        //app.elements.filteritembar.hide();

                        app.elements.filterbar.hide();

                        app.elements.DoubleGridPanel.items.items[1].hide();

                        var title = app.locale("RezKv");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "NumberOf",
                                text: app.locale("NumberOf"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Street",
                                text: app.locale("Street"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "House",
                                text: app.locale("House"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Korpus",
                                text: app.locale("Korpus"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "Apartment",
                                text: app.locale("Apartment"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CountOfRegistered",
                                text: app.locale("CountOfRegistered"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 8) {
                        app.buffer.main = 8;

                        app.elements.btnbar.hide();

                        app.elements.typeSelectorBar.hide();

                        //app.elements.filteritembar.hide();

                        app.elements.filterbar.hide();

                        app.elements.DoubleGridPanel.items.items[1].hide();

                        var title = app.locale("KKM_title");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "NumberOf",
                                text: app.locale("NumberOf"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "Address",
                                text: app.locale("Address"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "CountRegisterKKM",
                                text: app.locale("CountRegisterKKM"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                            {
                                dataIndex: "CountOrgAddress",
                                text: app.locale("CountOrgAddress"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true,
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 9) {
                        app.buffer.main = 9;
                        app.elements.btnbar.hide();
                        app.elements.typeSelectorBar.hide();
                        //app.elements.filteritembar.hide();
                        app.elements.filterbar.hide();
                        app.elements.DoubleGridPanel.items.items[1].hide();
                        var title = app.locale("Vakancy");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "Category",
                                text: app.locale("Category"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "Vacancy",
                                text: app.locale("Vacancy"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "CountVacancy",
                                text: app.locale("CountVacancy"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 10) {
                        app.buffer.main = 10;
                        app.elements.btnbar.hide();
                        app.elements.typeSelectorBar.hide();
                        //app.elements.filteritembar.hide();
                        app.elements.filterbar.hide();
                        app.elements.DoubleGridPanel.items.items[1].hide();
                        var title = app.locale("ReestrNotStatusTitle");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "IinLitsBezStatus",
                                text: app.locale("IinLitsBezStatus"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "FioLitsBezStatus",
                                text: app.locale("FioLitsBezStatus"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "AddressLitsBezStatus",
                                text: app.locale("AddressLitsBezStatus"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "PhoneLitsBezstatus",
                                text: app.locale("PhoneLitsBezstatus"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "FioSojitel",
                                text: app.locale("FioSojitel"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "AddressSojitel",
                                text: app.locale("AddressSojitel"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "BinMestoRabot",
                                text: app.locale("BinMestoRabot"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "NameMestoRabot",
                                text: app.locale("NameMestoRabot"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "IinSojitel",
                                text: app.locale("IinSojitel"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                        ]);
                    }
                    else if (!app.helpers.isEmpty(record.data.items[0].data.Main) && record.data.items[0].data.Main === 11) {
                        app.buffer.main = 11;
                        app.elements.btnbar.hide();
                        app.elements.typeSelectorBar.hide();
                        //app.elements.filteritembar.hide();
                        app.elements.filterbar.hide();
                        app.elements.DoubleGridPanel.items.items[1].hide();
                        var title = app.locale("NewErc");
                        app.helpers.changeTitle(title);

                        var appElementGrid = app.elements.grid;
                        appElementGrid.setColumns([
                            {
                                dataIndex: "Year",
                                text: app.locale("Year"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "Month",
                                text: app.locale("Month"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "Street",
                                text: app.locale("Street"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "House",
                                text: app.locale("House"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "NumberRegisteredApartments",
                                text: app.locale("NumberRegisteredApartments"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "Name",
                                text: app.locale("Name"),
                                cellWrap: true,
                                flex: 2,
                                hideable: true
                            },
                            {
                                dataIndex: "PresenceInformationData",
                                text: app.locale("PresenceInformationData"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                            {
                                dataIndex: "AvailabilityConsumptionInformation",
                                text: app.locale("AvailabilityConsumptionInformation"),
                                cellWrap: true,
                                flex: 1,
                                hideable: true
                            },
                        ]);
                    }
                }
            }
        }); 
        
        app.elements.grid = Ext.create("Ext.grid.Panel", {
            listeners: {
                rowdblclick: function (grid, record) {
                    app.handlers.objectrowdblclick(record);
                },
                headerclick: function (header, column, e, t, eOpts) {
                    app.handlers.sortheaderclcik(header,column, e, t, eOpts);
                }
            },
            store: app.elements.store,
        });

        app.elements.body = Ext.create("Ext.panel.Panel", {
            //title: , //app.locale("Register"),
            layout: "fit",
            region: "center",            
            items: [
                app.elements.grid,
                {
                    hidden: true,
                    html: "<div id=\"register_map\"></div>"
                }
            ],
            dockedItems: [
                app.elements.typeSelectorBar, app.elements.filterbar, app.elements.filteritembar, app.elements.filterextrabar, app.elements.btnbar
            ],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: app.elements.store,
                displayInfo: true,
                beforePageText: app.locale("Page"),
                afterPageText: app.locale("From"),
                displayMsg: app.locale("Paging"),
                emptyMsg: app.locale("NoData"),
                inputItemWidth: 35
            })
        });
        app.elements.viewport.add(app.elements.body);

        app.elements.StaticLocalStore = Ext.create("Ext.data.Store", {
            fields: ['id', 'name'],
            data: [
                { "id": "treatment", "name": "Обращение" },
                { "id": "meet", "name": "Встреча" },
                { "id": "contacts", "name": "Контакты" },
                { "id": "comments", "name": "Комментарий" }
            ],
        });
        app.elements.UserNameStore = Ext.create("Ext.data.Store", {
            fields: ["username"],
            autoLoad: true,
            remoteFilter: true,
            
            proxy: {
                type: "ajax",
                url: "api/username/get",
                actionMethods: {
                    read: "GET"
                },
                timeout: 60000,
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                }
            },
            listeners: {
                load: function (store, records, success) {
                    //console.log(app.buffer.record.data.BIN);
                    app.buffer.username = records;
                }
            }
        });

        app.elements.TreatmentStore = Ext.create("Ext.data.Store", {
            fields: ["Id", "CP_BIN", "NumberTreatment", "requested", "answer", "comment"],
            autoLoad: false,
            remoteFilter: true,
            pageSize: 10,
            proxy: {
                type: "ajax",
                url: "api/treatment/get",
                actionMethods: {
                    read: "GET"
                },
                timeout: 60000,
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                    root: 'objects',
                    totalProperty: 'count'
                }
            },
            listeners: {
                load: function () {
                    //console.log(app.buffer.record.data.BIN);
                }
            }
        });
        app.elements.TreatmentGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale('Treatment'),
            id: 'treatmentGridId',
            store: app.elements.TreatmentStore,
            columns: [
                {
                    text: 'БИН', flex: 1, dataIndex: "CP_BIN", autoSizeColumn: true
                },
                {
                    text: app.locale("Number treatment"), flex: 1, dataIndex: "NumberTreatment", autoSizeColumn: true
                },
                {
                    text: 'Куда обратился', flex: 1, dataIndex: "requested", autoSizeColumn: true
                },
                {
                    text: app.locale("Answer"), flex: 1, dataIndex: "answer", width: 150, autoSizeColumn: true
                },
                {
                    text: app.locale("Comments"), flex: 1, dataIndex: "comment", width: 150, autoSizeColumn: true
                },
                {
                    xtype: 'actioncolumn',
                    text: app.locale("Update"),
                    flex: 1,
                    width: 150,
                    autoSizeColumn: true,
                    items: [
                        {
                            xtype: 'image',
                            id: 'addremoveicon',
                            iconCls: 'plus-icon',
                            icon: 'assets/img/edit.png',
                            tooltip: app.locale("Update"),
                            handler: app.handlers.addTreatmentItems,
                        }
                    ],
                }
            ],
            viewConfig: {
                listeners: {
                    refresh: function (dataview) {
                        Ext.each(dataview.panel.columns, function (column) {
                            if (column.autoSizeColumn === true)
                                column.autoSize();
                        })
                    }
                }
            },
        });
        app.elements.TreatmentForm = Ext.create("Ext.form.Panel", {
            title: app.locale('Treatment'),
            width: '100%',
            height: 400,
            autoScroll: true,
            id: 'treatment',
            hidden: false,
            defaults: {
                width: '90%',
                margin: '5 5 5 5',
            },
            //closable: true,
            //border: false,
            items: [
                {
                    xtype: 'hidden',
                    name: 'Id',
                },
                {
                    xtype: 'hidden',
                    name: 'BIN',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: app.locale("Number treatment"),
                    name: "NumberTreatment",
                    valueField: "NumberTreatment",
                    displayField: "NumberTreatment",
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    allowBlank: false,
                    maxLength: 10,
                    enforceMaxLength: true,
                    maskRe: /[0-9.]/
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Куда обратился',
                    name: 'requested',
                    valueField: 'requested',
                    displayField: 'requested',
                },
                {
                    xtype: 'textareafield',
                    grow: false,
                    name: 'answer',
                    fieldLabel: app.locale("Answer"),
                    anchor: '100%',
                    displayField: 'answer',
                    valueField: 'answer',
                },
                {
                    xtype: 'textareafield',
                    grow: false,
                    name: 'comment',
                    fieldLabel: app.locale("Comments"),
                    anchor: '100%',
                    displayField: 'comment',
                    valueField: 'comment',
                },
            ],
            //items: [

            //    //{
            //    //    xtype: 'button',
            //    //    text: app.locale("Add more"),
            //    //    handler: (a) => {
            //    //        app.handlers.addTreatmentItems(a);
            //    //    }
            //    //}
            //],

            buttons: [{
                text: app.locale("Clear"),
                handler: function () {
                    var me = this;
                    me.up('form').getForm().reset();
                    app.elements.TreatmentForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                }
            }, {
                text: app.locale("Send"),
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function () {
                    var me = this;
                    var form = me.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            url: 'api/treatment/add',
                            method: 'POST',
                            success: function (form, action) {
                                //Ext.Msg.alert('Success', action.result.msg);
                                app.elements.TreatmentStore.reload();
                                Ext.Msg.alert("Система", "Успешно выполнено");
                                form.reset();
                                app.elements.TreatmentForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                            },
                            failure: function (form, action) {
                                //Ext.Msg.alert('Failed', action.result.msg);
                                Ext.Msg.alert("Система", "Неизвестная ошибка.");
                            }
                        });
                    }
                }
            }]
        });

        app.elements.MeetStore = Ext.create("Ext.data.Store", {
            fields: ["Id", "CP_BIN", "MeetDate", "MeetTime", "title", "description"],
            autoLoad: false,
            remoteFilter: true,
            pageSize: 10,
            proxy: {
                type: "ajax",
                url: "api/meet/get",
                actionMethods: {
                    read: "GET"
                },
                timeout: 60000,
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                    root: 'objects',
                    totalProperty: 'count'
                }
            },
        });
        app.elements.MeetGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale('Meet'),
            id: 'meetGridId',
            store: app.elements.MeetStore,
            columns: [
                {
                    text: 'БИН', flex: 1, dataIndex: "CP_BIN", autoSizeColumn: true
                },
                {
                    text: app.locale("Дата встреча"),
                    flex: 1,
                    dataIndex: "MeetDate",
                    autoSizeColumn: true,
                    //renderer: function (v) {
                    //    console.log(v);
                    //    //return Ext.util.Format.substr(v, 0, 10);
                    //    return Ext.util.Format.dateRenderer('Y/m/d');
                    //},
                    renderer: Ext.util.Format.dateRenderer('d:m:Y'),
                },
                {
                    text: 'Время встреча',
                    flex: 1,
                    dataIndex: "MeetTime",
                    autoSizeColumn: true,
                    renderer: function (v) {
                        return Ext.util.Format.substr(v, 11, 8);
                    },
                },
                {
                    text: app.locale("Заголовок"), flex: 1, dataIndex: "title", width: 150, autoSizeColumn: true
                },
                {
                    text: app.locale("Описания"), flex: 1, dataIndex: "description", width: 150, autoSizeColumn: true
                },
                {
                    xtype: 'actioncolumn',
                    text: app.locale("Update"),
                    flex: 1,
                    width: 150,
                    autoSizeColumn: true,
                    items: [
                        {
                            xtype: 'image',
                            id: 'addremoveicon',
                            iconCls: 'plus-icon',
                            icon: 'assets/img/edit.png',
                            tooltip: app.locale("Update"),
                            handler: app.handlers.addMeetItems,
                        }
                    ],
                }
            ],
            viewConfig: {
                listeners: {
                    refresh: function (dataview) {
                        Ext.each(dataview.panel.columns, function (column) {
                            if (column.autoSizeColumn === true)
                                column.autoSize();
                        })
                    }
                }
            },
        });
        app.elements.MeetForm = Ext.create("Ext.form.Panel", {
            title: app.locale('Meet'),
            width: '100%',
            height: 400,
            autoScroll: true,
            id: 'meet',
            hidden: true,
            items: [
                {
                    xtype: 'hidden',
                    name: 'Id',
                },
                {
                    xtype: 'hidden',
                    name: 'BIN'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: app.locale("Date"),
                    name: 'MeetDate',
                    valueField: 'MeetDate',
                    displayField: 'MeetDate',
                    id: 'MeetDate',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    allowBlank: false,
                },
                {
                    xtype: 'textfield',
                    fieldLabel: app.locale("Time"),
                    name: 'MeetTime',
                    valueField: 'MeetTime',
                    displayField: 'MeetTime',
                    id: 'MeetTime',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    allowBlank: false,
                },
                {
                    xtype: 'textfield',
                    fieldLabel: app.locale("Title"),
                    name: 'title',
                    valueField: 'title',
                    displayField: 'title',
                },
                {
                    xtype: 'textareafield',
                    grow: false,
                    name: 'description',
                    fieldLabel: app.locale("Description"),
                    anchor: '100%',
                    valueField: 'description',
                    displayField: 'description',
                },
            ],
            //items: [
            //    {
            //        xtype: 'button',
            //        text: app.locale("Add more"),
            //        handler: (a) => {
            //            console.log(a);
            //            app.handlers.addMeetItems(a);
            //        }
            //    }
            //],
            buttons: [{
                text: app.locale("Clear"),
                handler: function () {
                    var two = this;
                    two.up('form').getForm().reset();
                    app.elements.MeetForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                }
            }, {
                text: app.locale("Send"),
                //formBind: true, //only enabled once the form is valid
                //disabled: true,
                handler: function () {
                    var two = this;
                    var form = two.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            url: 'api/meet/add',
                            method: 'POST',
                            success: function (form, action) {
                                Ext.Msg.alert("Система", "Успешно выполнено");
                                app.elements.MeetStore.reload();
                                form.reset();
                                app.elements.MeetForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert("Система", "Неизвестная ошибка.");
                            }
                        });
                    }
                }
            }],
        });

        app.elements.ContactsStore = Ext.create("Ext.data.Store", {
            fields: ["Id", "CP_BIN", "Post", "Comment", "PhoneNumber", "Address"],
            autoLoad: false,
            remoteFilter: true,
            pageSize: 10,
            proxy: {
                type: "ajax",
                url: "api/contacts/get",
                actionMethods: {
                    read: "GET"
                },
                timeout: 60000,
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                    root: 'objects',
                    totalProperty: 'count'
                }
            },
        });
        app.elements.ContactsGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale('Contacts'),
            id: 'contactsGridId',
            store: app.elements.ContactsStore,
            columns: [
                {
                    text: 'БИН', flex: 1, dataIndex: "CP_BIN", autoSizeColumn: true
                },
                {
                    text: app.locale("Post"),
                    flex: 1,
                    dataIndex: "Post",
                    autoSizeColumn: true,
                },
                {
                    text: app.locale("Comments"),
                    flex: 1,
                    dataIndex: "Comment",
                    autoSizeColumn: true,
                },
                {
                    text: app.locale("Phone number"), flex: 1, dataIndex: "PhoneNumber", width: 150, autoSizeColumn: true//align: 'center',
                },
                {
                    text: app.locale("Address"), flex: 1, dataIndex: "Address", width: 150, autoSizeColumn: true//align: 'center',
                },
                {
                    xtype: 'actioncolumn',
                    text: app.locale("Update"),
                    flex: 1,
                    width: 150,
                    autoSizeColumn: true,
                    items: [{
                        xtype: 'image',
                        id: 'addremoveicon',
                        iconCls: 'plus-icon',
                        icon: 'assets/img/edit.png',
                        tooltip: app.locale("Update"),
                        handler: app.handlers.addContactsItems,
                    },],
                }
            ],
            viewConfig: {
                listeners: {
                    refresh: function (dataview) {
                        Ext.each(dataview.panel.columns, function (column) {
                            if (column.autoSizeColumn === true)
                                column.autoSize();
                        })
                    }
                }
            },
        });
        app.elements.ContactsForm = Ext.create("Ext.form.Panel", {
            title: app.locale('Contacts'),
            width: '100%',
            height: 400,
            autoScroll: true,
            id: 'contacts',
            hidden: true,
            items: [
                {
                    xtype: 'hidden',
                    name: 'Id',
                },
                {
                    xtype: 'hidden',
                    name: 'BIN'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: app.locale("Address"),
                    name: 'Address',
                    valueField: 'Address',
                    displayField: 'Address',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: app.locale("Phone number"),
                    name: 'PhoneNumber',
                    valueField: 'PhoneNumber',
                    displayField: 'PhoneNumber',
                    //maxLength: 10,
                    //enforceMaxLength: true,
                    //maskRe: /[0-9.]/,
                    ////maxLength: '11'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: app.locale("Post"),
                    vtype: 'email',
                    name: 'Post',
                    valueField: 'Post',
                    displayField: 'Post',
                },
                {
                    xtype: 'textareafield',
                    grow: false,
                    name: 'Comment',
                    fieldLabel: app.locale("Comments"),
                    anchor: '100%',
                    valueField: 'Comment',
                    displayField: 'Comment',
                },
            ],
            buttons: [
                {
                    text: app.locale("Clear"),
                    handler: function () {
                        this.up('form').getForm().reset();
                        app.elements.ContactsForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                    }
                },
                {
                    text: app.locale("Send"),
                    //formBind: true, //only enabled once the form is valid
                    //disabled: true,
                    handler: function () {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            form.submit({
                                url: 'api/contact/add',
                                method: 'POST',
                                success: function (form, action) {
                                    Ext.Msg.alert("Система", "Успешно выполнено");
                                    app.elements.ContactsStore.reload();
                                    form.reset();
                                    app.elements.ContactsForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                                },
                                failure: function (form, action) {
                                    Ext.Msg.alert("Система", "Неизвестная ошибка.");
                                }
                            });
                        }
                    }
                }
            ],
        });

        app.elements.CommentsStore = Ext.create("Ext.data.Store", {
            fields: ["Id", "CP_BIN", "Comment"],
            autoLoad: false,
            remoteFilter: true,
            pageSize: 10,
            proxy: {
                type: "ajax",
                url: "api/comments/get",
                actionMethods: {
                    read: "GET"
                },
                timeout: 60000,
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                    root: 'objects',
                    totalProperty: 'count'
                }
            },
        });
        app.elements.CommentsGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale('Comments'),
            id: 'commentsGridId',
            store: app.elements.CommentsStore,
            columns: [
                {
                    text: 'БИН', flex: 1, dataIndex: "CP_BIN", autoSizeColumn: true
                },
                {
                    text: app.locale('Comments'),
                    flex: 1,
                    dataIndex: "Comment",
                    autoSizeColumn: true,
                },
                {
                    xtype: 'actioncolumn',
                    text: app.locale("Update"),
                    flex: 1,
                    width: 150,
                    autoSizeColumn: true,
                    items: [
                        {
                            xtype: 'image',
                            id: 'addremoveicon',
                            iconCls: 'plus-icon',
                            icon: 'assets/img/edit.png',
                            tooltip: app.locale("Update"),
                            handler: app.handlers.addCommentsItems
                        },
                    ],
                }
            ],
            viewConfig: {
                listeners: {
                    refresh: function (dataview) {
                        Ext.each(dataview.panel.columns, function (column) {
                            if (column.autoSizeColumn === true)
                                column.autoSize();
                        })
                    }
                }
            },
        });
        app.elements.CommentsForm = Ext.create("Ext.form.Panel", {
            title: app.locale('Comments'),
            width: '100%',
            height: 400,
            autoScroll: true,
            id: 'comments',
            hidden: true,
            items: [
                {
                    xtype: 'hidden',
                    name: 'Id',
                },
                {
                    xtype: 'hidden',
                    name: 'BIN'
                },
                {
                    xtype: 'textareafield',
                    grow: false,
                    name: 'Comment',
                    fieldLabel: app.locale("Comments"),
                    anchor: '100%',
                    valueField: 'Comment',
                    displayField: 'Comment',
                }
            ],
            //items: [
            //    {
            //        xtype: 'button',
            //        text: app.locale("Add more"),
            //        handler: (a) => {
            //            app.handlers.addCommentsItems(a);
            //        }
            //    }
            //],


            buttons: [{
                text: app.locale("Clear"),
                handler: function () {
                    this.up('form').getForm().reset();
                    app.elements.CommentsForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                }
            }, {
                text: app.locale("Send"),
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                       form.submit({
                            url: 'api/comment/add',
                            method: 'POST',
                            success: function (form, action) {
                                Ext.Msg.alert("Система", "Успешно выполнено");
                                app.elements.CommentsStore.reload();
                                form.reset();
                                app.elements.CommentsForm.getForm().setValues({ "BIN" : app.buffer.record.data.BIN});
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert("Система", "Неизвестная ошибка.");
                            }
                        });
                    }
                }
            }],
        });
 
        app.elements.pasportgrid = Ext.create("Ext.grid.Panel", {
            //title: app.locale("Values"),
            store: Ext.create("Ext.data.Store", {}),
            region: 'north',
            //layout: 'north',
            //flex: 1,
            autoScroll: true,
            columns: [
                {
                    dataIndex: "property",
                    text: app.locale("Name"),
                    flex: 1
                },
                {
                    dataIndex: "value",
                    text: app.locale("Value"),
                    cellWrap: true,
                    flex: 2
                }
            ]            
        });
       
        app.elements.AdditionalInformationPanel = Ext.create("Ext.panel.Panel", {
            title: app.locale("Additional information"),
            region: 'south',
            items: [
                {
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            width: '50%',
                            height: 400,
                            autoScroll: true,
                            items: Ext.create("Ext.tab.Panel", {
                                listeners: {
                                    'tabchange': function (tabPanel, tab) {
                                        app.handlers.tabchange(tab.id, tab);
                                    }
                                },
                                items: [
                                    app.elements.TreatmentGrid,
                                    app.elements.MeetGrid,
                                    app.elements.ContactsGrid,
                                    app.elements.CommentsGrid
                                ]
                            })
                        },
                        {
                            xtype: 'panel',
                            width: '20%',
                            bodyStyle: 'margin: 10px;',
                            items: [
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Выберите элемент',
                                    store: app.elements.StaticLocalStore,
                                    queryMode: 'local',
                                    displayField: 'name',
                                    valueField: 'id',
                                    listeners: {
                                        select: function (combo, record, index) {
                                            var id = record.data['id'];
                                            //console.log(id);
                                            if (id == "treatment") {
                                                Ext.getCmp('treatment').show();
                                                Ext.getCmp('meet').hide();
                                                Ext.getCmp('contacts').hide();
                                                Ext.getCmp('comments').hide();
                                            }
                                            if (id == "meet") {
                                                //console.log(id);
                                                Ext.getCmp('treatment').hide();
                                                Ext.getCmp('meet').show();
                                                Ext.getCmp('contacts').hide();
                                                Ext.getCmp('comments').hide();
                                            }
                                            if (id == "contacts") {
                                                Ext.getCmp('treatment').hide();
                                                Ext.getCmp('meet').hide();
                                                Ext.getCmp('contacts').show();
                                                Ext.getCmp('comments').hide();
                                            }
                                            if (id == "comments") {
                                                Ext.getCmp('treatment').hide();
                                                Ext.getCmp('meet').hide();
                                                Ext.getCmp('contacts').hide();
                                                Ext.getCmp('comments').show();
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            width: '30%',
                            height: 400,
                            items: [
                                app.elements.TreatmentForm,
                                app.elements.MeetForm,
                                app.elements.ContactsForm,
                                app.elements.CommentsForm,
                            ]
                        }
                    ]
                },
            ]
        });

        app.elements.DoubleGridPanel = Ext.create("Ext.panel.Panel", {
            title: app.locale("Values"),
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start',
            },
            //layout: 'fit',
            items: [
                app.elements.pasportgrid,
                app.elements.AdditionalInformationPanel
            ]
        });

        app.elements.licensegrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("Licenses"),
            id: 'licesId',
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/licenses',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "CP_LicenseNumber",
                    text: app.locale("LicenseNumber"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_LicenseUINRD",
                    text: app.locale("LicenseUINRD"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_LicenseSeries",
                    text: app.locale("LicenseSeries"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_DateVydachi",
                    text: app.locale("DateVydachi"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_LicenseStatus",
                    text: app.locale("LicenseStatus"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Srok_deistv_license",
                    text: app.locale("Srok_deistv_license"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Srok_pr_license",
                    text: app.locale("Srok_pr_license"),
                    cellWrap: true,
                    flex: 1
                }
            ]            
        });
        app.elements.servicesgrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("ServicesUsed"),
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/servicesused',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "CP_Service_Provider",
                    text: app.locale("Service_Provider"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Payer_status",
                    text: app.locale("Payer_status"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Z13402",
                    text: app.locale("Z13402"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Z13401",
                    text: app.locale("Z13401"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Z13403",
                    text: app.locale("Z13403"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Z13405",
                    text: app.locale("Z13405"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Z13404",
                    text: app.locale("Z13404"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });
        app.elements.analyticspanel = Ext.create("Ext.panel.Panel", {
            tbar: {
                xtype: "panel",
                defaults: {
                    margin: "5 5 5 5",
                    xtype: "combobox",
                    width: 250,
                    editable: false,
                    displayField: 'text',
                    valueField: 'Id',
                    labelAlign: "top"
                },
                layout: "hbox",
                height: 90,
                items: [
                    {
                        xtype: "checkbox",
                        margin: "25 0 5 5",
                        width: 20,
                        checked: true,
                        concept: "KATO",
                        listeners: {
                            change: app.handlers.analyticsfiltercheckbox
                        }
                    },
                    {
                        store: Ext.create("Ext.data.Store", {
                            autoLoad: true,
                            proxy: {
                                type: "ajax",
                                url: 'api/directory?concept=KATO&lev=1&lang=' + app.lang,
                                isSynchronous: false,
                                headers: {
                                    'Content-Type': 'application/json;charset=utf-8'
                                },
                                reader: {
                                    type: 'json'
                                }
                            }
                        }),
                        listeners: {
                            change: app.handlers.analyticschart
                        },
                        fieldLabel: app.locale("KATO"),
                        concept: "KATO"
                    },
                    {
                        xtype: "checkbox",
                        margin: "25 0 5 5",
                        width: 20,
                        checked: true,
                        concept: "OKED",
                        listeners: {
                            change: app.handlers.analyticsfiltercheckbox
                        }
                    },
                    {
                        store: Ext.create("Ext.data.Store", {
                            data: app.data.okedmin
                        }),
                        queryMode: "local",
                        listeners: {
                            change: app.handlers.analyticschart
                        },
                        fieldLabel: app.locale("OKED"),
                        concept: "OKED"
                    },
                    {
                        xtype: "checkbox",
                        margin: "25 0 5 5",
                        width: 20,
                        checked: true,
                        concept: "KRP",
                        listeners: {
                            change: app.handlers.analyticsfiltercheckbox
                        }
                    },
                    {
                        store: Ext.create("Ext.data.Store", {
                            data: app.data.krpmin
                        }),
                        listeners: {
                            change: app.handlers.analyticschart
                        },
                        queryMode: "local",
                        fieldLabel: app.locale("KRP"),
                        concept: "KRP"
                    }
                ]
            },
            id: "analytics",
            title: app.locale("Analytics"),
            layout: "border",
            items: [
                {
                    xtype: "panel",
                    region: "center",
                    html: "<div id='chart_analytics'></div>"
                },
                {
                    region: "east",
                    width: "50%",
                    xtype: "grid",
                    store: {
                        fields: ["Name", "TaxSum", "SalaryAvg", "EmplCount", "CompanyAge"]
                    },
                    columns: [
                        {
                            dataIndex: "Name",
                            text: app.locale("Name"),
                            cellWrap: true, flex: 2,
                            renderer: function (value, metaData, record) {
                                if (value !== 0)
                                    return "<span class='o-dot o-st-" + record.data.Id + "'>&bull; </span>" + value;
                                else
                                    return "";
                            }
                        },
                        {
                            dataIndex: "TaxSum",
                            text: app.locale("TaxSum") + ", тенге",
                            cellWrap: true,
                            width: 120
                        },
                        {
                            dataIndex: "SalaryAvg",
                            text: app.locale("SalaryAvg") + ", тенге",
                            cellWrap: true,
                            width: 120
                        },
                        {
                            dataIndex: "EmplCount",
                            text: app.locale("EmplCount") + ", человек",
                            cellWrap: true, width: 120
                        }
                    ]
                }]
        });
        app.elements.spiderpanel = Ext.create("Ext.panel.Panel", {
            tbar: {
                xtype: "panel",
                defaults: {
                    margin: "5 5 5 5",
                    xtype: "combobox",
                    width: 200,
                    editable: false,
                    displayField: 'text',
                    valueField: 'Id',
                    labelAlign: "top"
                },
                layout: "hbox",
                height: 90,
                items: [
                    {
                        xtype: "checkbox",
                        margin: "25 0 5 5",
                        width: 20,
                        checked: true,
                        concept: "KATO",
                        listeners: {
                            change: app.handlers.spiderfiltercheckbox
                        }
                    },
                    {
                        store: Ext.create("Ext.data.Store", {
                            autoLoad: true,
                            proxy: {
                                type: "ajax",
                                url: 'api/directory?concept=KATO&lev=1&lang=' + app.lang,
                                isSynchronous: false,
                                headers: {
                                    'Content-Type': 'application/json;charset=utf-8'
                                },
                                reader: {
                                    type: 'json'
                                }
                            }
                        }),
                        listeners: {
                            change: app.handlers.spiderchart
                        },
                        fieldLabel: app.locale("KATO"),
                        concept: "KATO"
                    },
                    {
                        xtype: "checkbox",
                        margin: "25 0 5 5",
                        width: 20,
                        checked: true,
                        concept: "KRP_counted",
                        listeners: {
                            change: app.handlers.spiderfiltercheckbox
                        }
                    },
                    {
                        store: Ext.create("Ext.data.Store", {
                            data: app.data.krpmin
                        }),
                        listeners: {
                            change: app.handlers.spiderchart
                        },
                        queryMode: "local",
                        fieldLabel: app.locale("KRP"),
                        concept: "KRP_counted"
                    },
                    {
                        xtype: "checkbox",
                        margin: "25 0 5 5",
                        width: 20,
                        checked: true,
                        concept: "Vid_OKED",
                        listeners: {
                            change: app.handlers.spiderfiltercheckbox
                        }
                    },
                    {
                        store: Ext.create("Ext.data.Store", {
                            data: app.data.okedmin
                        }),
                        queryMode: "local",
                        listeners: {
                            change: app.handlers.spiderchart
                        },
                        fieldLabel: app.locale("OKED"),
                        concept: "Vid_OKED"
                    },
                    {
                        hidden: true,
                        store: Ext.create("Ext.data.Store", {
                            data: app.data.years
                        }),
                        listeners: {
                            change: app.handlers.spiderchart
                        },
                        queryMode: "local",
                        fieldLabel: app.locale("Period"),
                        concept: "Period"
                    }
                ]
            },
            id: "spider",
            title: app.locale("Spider"),
            layout: "border",
            items: [
                {
                    xtype: "panel",
                    region: "center",
                    html: "<div id='chart_spider'></div>"
                },
                {
                    region: "east",
                    width: "50%",
                    xtype: "grid",
                    store: {
                        fields: ["Name", "TaxSum", "SalaryAvg", "EmplCount", "CompanyAge"]
                    },
                    columns: [
                        {
                            dataIndex: "Name",
                            text: app.locale("Name"),
                            cellWrap: true, flex: 2,
                            renderer: function (value, metaData, record) {
                                if (value !== 0)
                                    return "<span class='o-dot o-st-" + record.data.Id + "'>&bull; </span>" + value;
                                else
                                    return "";
                            }
                        },
                        {
                            dataIndex: "TaxSum",
                            text: app.locale("TaxSum")+", тенге",
                            cellWrap: true,
                            width: 120
                        },
                        {
                            dataIndex: "SalaryAvg",
                            text: app.locale("SalaryAvg")+", тенге",
                            cellWrap: true,
                            width: 120
                        },
                        {
                            dataIndex: "EmplCount",
                            text: app.locale("EmplCount") + ", человек",
                            cellWrap: true, width: 120
                        },
                        {
                            dataIndex: "CompanyAge",
                            text: app.locale("CompanyAge") + ", год",
                            cellWrap: true, width: 120
                        }
                    ]
                }
            ]
        });

        app.elements.certificategrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("Certificate"),
            id: "Certificates",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/certificates',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "CP_ops",
                    text: app.locale("ops"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Date_reg",
                    text: app.locale("Date_reg"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "CP_Date_expire",
                    text: app.locale("Date_expire"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "CP_Certificate_Number",
                    text: app.locale("Certificate_Number"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Product_manufacturer",
                    text: app.locale("Product_manufacturer"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_N_T_B_of_products",
                    text: app.locale("N_T_B_of_products"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Comp_reg",
                    text: app.locale("Comp_reg"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Applicant",
                    text: app.locale("Applicant"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Basis_iss_cert",
                    text: app.locale("Basis_iss_cert"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Rukov_OPS",
                    text: app.locale("Rukov_OPS"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Dop_Info",
                    text: app.locale("Dop_Info"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Expert_auditor",
                    text: app.locale("Expert_auditor"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Certificate_type",
                    text: app.locale("Certificate_type"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });
        // Gos Zakup
        app.elements.goszakupCustomerGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("Zakup"),
            id: "GosZakupCustomer",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                groupField: 'year',
                proxy: {
                    type: "ajax",
                    url: 'api/goszakup/customer',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0 || records === null) {
                            Ext.getCmp('GosZakupCustomer').hide();
                        } else {
                            Ext.getCmp('GosZakupCustomer').show();
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "Name",
                    text: app.locale("Name"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "BIN",
                    text: app.locale("BIN"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "sign_date",
                    text: app.locale("sign_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "ec_end_date",
                    text: app.locale("ec_end_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "plan_exec_date",
                    text: app.locale("plan_exec_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "fakt_exec_date",
                    text: app.locale("fakt_exec_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "contract_sum_wnds",
                    text: app.locale("contract_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "fakt_sum_wnds",
                    text: app.locale("fakt_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "description_ru",
                    text: app.locale("description_ru"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "ref_contract_status",
                    text: app.locale("ref_contract_status"),
                    cellWrap: true,
                    flex: 1
                }
            ],            
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'year'
            }]
        });

        app.elements.goszakupfbnCustomerGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("GosZakupFBN"),
            id: "GosZakupFBNCustomer",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                groupField: 'year',
                proxy: {
                    type: "ajax",
                    url: 'api/goszakupfbn/customer',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0 || records === null) {
                            Ext.getCmp('GosZakupFBNCustomer').hide();
                        } else {
                            Ext.getCmp('GosZakupFBNCustomer').show();
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "Name_Customer",
                    text: app.locale("Name_Customer"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "Name_Supplier",
                    text: app.locale("Name_Supplier"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "Legal_Address",
                    text: app.locale("Legal_Address"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "isMSB",
                    text: app.locale("isMSB"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "isDCP",
                    text: app.locale("isDCP"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "year",
                    text: app.locale("year"),
                    cellWrap: true,
                    flex: 1
                }
            ],            
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'year'
            }]
        });

        app.elements.goszakupnadlokCustomerStore = Ext.create("Ext.data.Store", {
            remoteFilter: true,
            pageSize: 25,
            autoLoad: false,
            groupField: 'year',
            proxy: {
                type: "ajax",
                url: 'api/goszakupnadlok/customer',
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                    root: 'objects',
                    totalProperty: 'count'
                }
            },
            listeners: {
                load: function (store, records, success, operation) {
                    if (records.length === 0 || records === null) {
                        Ext.getCmp('GosZakupNadlokCustomer').hide();
                    } else {
                        Ext.getCmp('GosZakupNadlokCustomer').show();
                    }
                }
            }
        });

        app.elements.goszakupnadlokCustomerGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("GosZakupNadlok"),
            id: "GosZakupNadlokCustomer",
            store: app.elements.goszakupnadlokCustomerStore,
            columns: [
                {
                    dataIndex: "Customer",
                    text: app.locale("Customer"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "deal_number",
                    text: app.locale("deal_number"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "deal_date",
                    text: app.locale("deal_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "sum_deal_wnds",
                    text: app.locale("sum_deal_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Supplier",
                    text: app.locale("Supplier"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "TRU_Name",
                    text: app.locale("TRU_Name"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Volume_of_purchase",
                    text: app.locale("Volume_of_purchase"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "purchase_sum_wtnds",
                    text: app.locale("purchase_sum_wtnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Year",
                    text: app.locale("year"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Quarter",
                    text: app.locale("Quarter"),
                    cellWrap: true,
                    flex: 1
                }
            ],
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'year'
            }],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: app.elements.goszakupnadlokCustomerStore,
                displayInfo: true,
                beforePageText: app.locale("Page"),
                afterPageText: app.locale("From"),
                displayMsg: app.locale("Paging"),
                emptyMsg: app.locale("NoData"),
                inputItemWidth: 35
            })
        });

        // gos main panel
        app.elements.goszakupPanel = Ext.create("Ext.panel.Panel", {
            title: app.locale("ZakupkiCustomer"),
            id: "GosZakupCustomerPanel",
            autoScroll: true,
            layout: {
                type: 'vbox',
            },
            defaults: {
                width: "100%"
            },
            items: [
                app.elements.goszakupCustomerGrid,
                app.elements.goszakupfbnCustomerGrid,
                app.elements.goszakupnadlokCustomerGrid
            ]
        });
        // Supplier
        app.elements.goszakupSupplierGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("Zakup"),
            id: "GosZakupSupplier",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                groupField: 'year',
                proxy: {
                    type: "ajax",
                    url: 'api/goszakup/supplier',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0 || records === null) {
                            Ext.getCmp('GosZakupSupplier').hide();
                        } else {
                            Ext.getCmp('GosZakupSupplier').show();
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "Name",
                    text: app.locale("Name"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "BIN",
                    text: app.locale("BIN"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "sign_date",
                    text: app.locale("sign_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "ec_end_date",
                    text: app.locale("ec_end_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "plan_exec_date",
                    text: app.locale("plan_exec_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "fakt_exec_date",
                    text: app.locale("fakt_exec_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "contract_sum_wnds",
                    text: app.locale("contract_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "fakt_sum_wnds",
                    text: app.locale("fakt_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "description_ru",
                    text: app.locale("description_ru"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "ref_contract_status",
                    text: app.locale("ref_contract_status"),
                    cellWrap: true,
                    flex: 1
                }
            ],
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'year'
            }]
        });

        app.elements.goszakupfbnSupplierGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("GosZakupFBN"),
            id: "GosZakupFBNSupplier",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                groupField: 'year',
                proxy: {
                    type: "ajax",
                    url: 'api/goszakupfbn/supplier',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0 || records === null) {
                            Ext.getCmp('GosZakupFBNSupplier').hide();
                        } else {
                            Ext.getCmp('GosZakupFBNSupplier').show();
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "Name_Customer",
                    text: app.locale("Name_Customer"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "Name_Supplier",
                    text: app.locale("Name_Supplier"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "Legal_Address",
                    text: app.locale("Legal_Address"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "isMSB",
                    text: app.locale("isMSB"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "isDCP",
                    text: app.locale("isDCP"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "year",
                    text: app.locale("year"),
                    cellWrap: true,
                    flex: 1
                }
            ],
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'year'
            }]
        });

        app.elements.goszakupnadlokSupplierStore = Ext.create("Ext.data.Store", {
            remoteFilter: true,
            pageSize: 25,
            autoLoad: false,
            groupField: 'year',
            proxy: {
                type: "ajax",
                url: 'api/goszakupnadlok/supplier',
                isSynchronous: false,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                reader: {
                    type: 'json',
                    root: 'objects',
                    totalProperty: 'count'
                }
            },
            listeners: {
                load: function (store, records, success, operation) {
                    if (records.length === 0 || records === null) {
                        Ext.getCmp('GosZakupNadlokSupplier').hide();
                    } else {
                        Ext.getCmp('GosZakupNadlokSupplier').show();
                    }
                }
            }
        });

        app.elements.goszakupnadlokSupplierGrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("GosZakupNadlok"),
            id: "GosZakupNadlokSupplier",
            store: app.elements.goszakupnadlokSupplierStore,
            columns: [
                {
                    dataIndex: "Customer",
                    text: app.locale("Customer"),
                    cellWrap: true,
                    flex: 2
                },
                {
                    dataIndex: "deal_number",
                    text: app.locale("deal_number"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "deal_date",
                    text: app.locale("deal_date"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "sum_deal_wnds",
                    text: app.locale("sum_deal_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Supplier",
                    text: app.locale("Supplier"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "TRU_Name",
                    text: app.locale("TRU_Name"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Volume_of_purchase",
                    text: app.locale("Volume_of_purchase"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "purchase_sum_wtnds",
                    text: app.locale("purchase_sum_wtnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Year",
                    text: app.locale("year"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "Quarter",
                    text: app.locale("Quarter"),
                    cellWrap: true,
                    flex: 1
                }
            ],
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'year'
            }],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: app.elements.goszakupnadlokSupplierStore,
                displayInfo: true,
                beforePageText: app.locale("Page"),
                afterPageText: app.locale("From"),
                displayMsg: app.locale("Paging"),
                emptyMsg: app.locale("NoData"),
                inputItemWidth: 35
            })
        });

        // gos main panel
        app.elements.goszakupSupplierPanel = Ext.create("Ext.panel.Panel", {
            title: app.locale("ZakupkiSupplier"),
            id: "GosZakupSupplierPanel",
            autoScroll: true,
            layout: {
                type: 'vbox',
            },
            defaults: {
                width: "100%"
            },
            items: [
                app.elements.goszakupSupplierGrid,
                app.elements.goszakupfbnSupplierGrid,
                app.elements.goszakupnadlokSupplierGrid
            ]
        });

        app.elements.gossupportgrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("GovSupport"),
            id: "GovSupport",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/govsuppport',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [                
                {
                    dataIndex: "CP_Program_Name",
                    text: app.locale("Program_Name"),
                    cellWrap: true,
                    flex: 1
                },                
                {
                    dataIndex: "CP_Support_type",
                    text: app.locale("Support_type"),
                    cellWrap: true,
                    flex: 1
                },                
                {
                    dataIndex: "CP_Date",
                    text: app.locale("Date"),
                    cellWrap: true,
                    xtype: 'datecolumn',
                    format: 'Y-m-d',
                    flex: 1
                },
                {
                    dataIndex: "CP_Year",
                    text: app.locale("Year"),
                    cellWrap: true,
                    flex: 1
                },               
                {
                    dataIndex: "CP_Z272101",
                    text: app.locale("CP_Z272101"),
                    cellWrap: true,
                    flex: 1
                },                
                {
                    dataIndex: "CP_Z272102",
                    text: app.locale("CP_Z272102"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });

        app.elements.checkgrid = Ext.create("Ext.grid.Panel", {
            title: app.locale("Checks"),
            id: "checkgrid",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/checks',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "CP_BIN",
                    text: app.locale("CP_BIN"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Name_prov_object",
                    text: app.locale("CP_Name_prov_object"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Risk_group",
                    text: app.locale("CP_Risk_group"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Category_pred",
                    text: app.locale("CP_Category_pred"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Date_prov_Subject",
                    text: app.locale("CP_Date_prov_Subject"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Prov_Gos_Organ",
                    text: app.locale("CP_Prov_Gos_Organ"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });

        app.elements.pasportwindow = Ext.create("Ext.window.Window", {
            title: app.locale("Pasport"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth()-100,
            modal: true,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.tab.Panel", {
                id: "TabId",
                listeners: {
                    'tabchange': function (tabPanel, tab) {
                        app.handlers.tabchange(tab.id, tab);
                        console.log(tab.id);
                        console.log(tab);
                    }
                },
                items: [
                    //app.elements.pasportgrid,
                    app.elements.DoubleGridPanel,
                    app.elements.licensegrid,
                    app.elements.certificategrid,
                    app.elements.goszakupPanel,
                    app.elements.goszakupSupplierPanel,
                    app.elements.gossupportgrid,
                    app.elements.checkgrid,
                    // app.elements.servicesgrid,
                    {
                        id: "tab_gcvp",
                        title: app.locale("GCVP"),
                        html: "<div id='chart_gcvp'></div>"
                    },
                    {
                        id: "tab_tax",
                        title: app.locale("Tax"),
                        html: "<div id='chart_tax'></div>"
                    },
                    {
                        id: "tab_map",
                        title: app.locale("OnMap"),
                        html: "<div id='map'></div>"
                    },
                    app.elements.analyticspanel,
                    app.elements.spiderpanel
                ]
            })
        });
                
        // Дополнительные компоненты для режима сравнение
        app.elements.pasportgridCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale("Values"),
            padding: '5 5 5 5',
            store: Ext.create("Ext.data.Store", {}),
            columns: [
                {
                    dataIndex: 'Property_Names',
                    text: app.locale('Property_Names'),
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'First_organisation',
                    text: app.locale('Organisation') + " 1",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Second_organisation',
                    text: app.locale('Organisation') + " 2",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Third_organisation',
                    text: app.locale('Organisation') + " 3",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Forth_organisation',
                    text: app.locale('Organisation') + " 4",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Fifth_organisation',
                    text: app.locale('Organisation') + " 5",
                    flex: 1,
                    cellWrap: true
                }
            ],
            defaults: {
                flex: 1,
                cellWrap: true
            }
        });

        app.elements.licensegridCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale('Licenses'),
            padding: '5 5 5 5',
            id: 'licensegridCompare',
            hideGroupedHeader: true,
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                groupField: 'CP_Name',
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/licenses/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0) {
                            Ext.getCmp('licensegridCompare').hide();
                        } else {                            
                            Ext.getCmp('licensegridCompare').show();
                            app.helpers.fillColumns(Ext.getCmp('licensegridCompare'), records);
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: 'Property_Names',
                    text: app.locale('Property_Names'),
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'First_organisation',
                    text: app.locale('Organisation') + " 1",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Second_organisation',
                    text: app.locale('Organisation') + " 2",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Third_organisation',
                    text: app.locale('Organisation') + " 3",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Forth_organisation',
                    text: app.locale('Organisation') + " 4",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Fifth_organisation',
                    text: app.locale('Organisation') + " 5",
                    flex: 1,
                    cellWrap: true
                }
            ],
            listeners: {
                celldblclick: function (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {        
                    app.handlers.licensesDetail(iColIdx);                            
                }
            }
        });

        app.elements.checkgridCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale('Checks'),
            padding: '5 5 5 5',
            id: 'checkgridCompare',
            hideGroupedHeader: true,
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                groupField: 'CP_Name',
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/check/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0) {
                            Ext.getCmp('checkgridCompare').hide();
                        } else {
                            Ext.getCmp('checkgridCompare').show();
                            app.helpers.fillColumns(Ext.getCmp('checkgridCompare'), records);
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: 'Property_Names',
                    text: app.locale('Property_Names'),
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'First_organisation',
                    text: app.locale('Organisation') + " 1",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Second_organisation',
                    text: app.locale('Organisation') + " 2",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Third_organisation',
                    text: app.locale('Organisation') + " 3",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Forth_organisation',
                    text: app.locale('Organisation') + " 4",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Fifth_organisation',
                    text: app.locale('Organisation') + " 5",
                    flex: 1,
                    cellWrap: true
                }
            ],
            listeners: {
                celldblclick: function (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
                    app.handlers.checkDetail(iColIdx);
                }
            }
        });

        app.elements.taxesgridCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale("Tax"),
            padding: '5 5 5 5',
            id: 'taxesgridCompare',
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                groupField: 'Type',
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/tax/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0 || records === null) {
                            Ext.getCmp('taxesgridCompare').hide();
                        } else {
                            Ext.getCmp('taxesgridCompare').show();
                        }
                    }
                }
            }),
            columns: [{
                dataIndex: 'Property_Names',
                text: app.locale('Property_Names'),
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'First_organisation',
                text: app.locale('Organisation') + " 1",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Second_organisation',
                text: app.locale('Organisation') + " 2",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Third_organisation',
                text: app.locale('Organisation') + " 3",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Forth_organisation',
                text: app.locale('Organisation') + " 4",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Fifth_organisation',
                text: app.locale('Organisation') + " 5",
                flex: 1,
                cellWrap: true
            }],
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'taxesGroup'
            }]
        });

        app.elements.gcvpCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale("GCVP"),
            padding: '5 5 5 5',
            id: 'gcvpCompare',
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                groupField: 'Type',
                proxy: {
                    type: "ajax",
                    url: 'api/gcvp/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0 || records === null) {
                            Ext.getCmp('gcvpCompare').hide();
                        } else {
                            Ext.getCmp('gcvpCompare').show();
                        }
                    }
                }
            }),
            columns: [{
                dataIndex: 'Property_Names',
                text: app.locale('Property_Names'),
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'First_organisation',
                text: app.locale('Organisation') + " 1",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Second_organisation',
                text: app.locale('Organisation') + " 2",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Third_organisation',
                text: app.locale('Organisation') + " 3",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Forth_organisation',
                text: app.locale('Organisation') + " 4",
                flex: 1,
                cellWrap: true
            },
            {
                dataIndex: 'Fifth_organisation',
                text: app.locale('Organisation') + " 5",
                flex: 1,
                cellWrap: true
            }],
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'taxesGroup'
            }]
        });

        app.elements.certificategridCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale('Certificate'),
            padding: '5 5 5 5',
            id: 'certificategridCompare',
            hideGroupedHeader: true,
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                groupField: 'CP_Name',
                proxy: {
                    type: "ajax",
                    url: 'api/certificates/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0) {
                            Ext.getCmp('certificategridCompare').hide();
                        } else {
                            Ext.getCmp('certificategridCompare').show();
                            app.helpers.fillColumns(Ext.getCmp('certificategridCompare'), records);
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: 'Property_Names',
                    text: app.locale('Property_Names'),
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'First_organisation',
                    text: app.locale('Organisation') + " 1",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Second_organisation',
                    text: app.locale('Organisation') + " 2",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Third_organisation',
                    text: app.locale('Organisation') + " 3",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Forth_organisation',
                    text: app.locale('Organisation') + " 4",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Fifth_organisation',
                    text: app.locale('Organisation') + " 5",
                    flex: 1,
                    cellWrap: true
                }
            ],
            listeners: {
                celldblclick: function (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
                    app.handlers.certificatesDetail(iColIdx);
                }
            }
        });

        app.elements.gosgridCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale('GovSupport'),
            padding: '5 5 5 5',
            id: 'gosgridCompare',
            hideGroupedHeader: true,
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                groupField: 'Type',
                proxy: {
                    type: "ajax",
                    url: 'api/gos/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0) {
                            Ext.getCmp('gosgridCompare').hide();
                        } else {
                            Ext.getCmp('gosgridCompare').show();
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: 'Property_Names',
                    text: app.locale('Property_Names'),
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'First_organisation',
                    text: app.locale('Organisation') + " 1",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Second_organisation',
                    text: app.locale('Organisation') + " 2",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Third_organisation',
                    text: app.locale('Organisation') + " 3",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Forth_organisation',
                    text: app.locale('Organisation') + " 4",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Fifth_organisation',
                    text: app.locale('Organisation') + " 5",
                    flex: 1,
                    cellWrap: true
                }
            ],
            features: [{
                ftype: 'grouping',
                groupHeaderTpl: '{name}',
                startCollapsed: true,
                id: 'gosGroup'
            }]
        });

        app.elements.goszakupgridCompare = Ext.create("Ext.grid.Panel", {
            title: app.locale('GosZakupBoth'),
            padding: '5 5 5 5',
            id: 'goszakupgridCompare',
            hideGroupedHeader: true,
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                proxy: {
                    type: "ajax",
                    url: 'api/goszakup/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                },
                listeners: {
                    load: function (store, records, success, operation) {
                        if (records.length === 0) {
                            Ext.getCmp('goszakupgridCompare').hide();
                        } else {
                            Ext.getCmp('goszakupgridCompare').show();
                            app.helpers.fillColumns(Ext.getCmp('goszakupgridCompare'), records);
                        }
                    }
                }
            }),
            columns: [
                {
                    dataIndex: 'Property_Names',
                    text: app.locale('Property_Names'),
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'First_organisation',
                    text: app.locale('Organisation') + " 1",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Second_organisation',
                    text: app.locale('Organisation') + " 2",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Third_organisation',
                    text: app.locale('Organisation') + " 3",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Forth_organisation',
                    text: app.locale('Organisation') + " 4",
                    flex: 1,
                    cellWrap: true
                },
                {
                    dataIndex: 'Fifth_organisation',
                    text: app.locale('Organisation') + " 5",
                    flex: 1,
                    cellWrap: true
                }
            ],
            listeners: {
                celldblclick: function (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
                    app.handlers.goszakupDetail(iColIdx);
                }
            }
        });


        app.elements.graphSelector = Ext.create("Ext.form.ComboBox", {
            width: 350,
            autoHeight: true,
            defaultValue: 0,
            value: 0,
            id: "graphSelector",
            padding: '10',
            fieldLabel: "Выберите тип",
            store: Ext.create("Ext.data.Store", {
                fields: ['type','name'],
                data: [
                    { "type": "taxsum", "name": app.locale('TaxSum') },
                    // { "type": "paidtaxsum", "name": app.locale('PaidTaxSum') },
                    { "type": "salaryavg", "name": app.locale('SalaryAvg') },
                    { "type": "emplcount", "name": app.locale('EmplCount') },
                    { "type": "goszakup-postavshik", "name": app.locale('GosZakupPostavshik') },
                    { "type": "goszakup-zakazchik", "name": app.locale('GosZakupZakazchik') }
                ]
            }),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'type',
            listeners: {
                'select': app.handlers.graphSelectorChange,
                'afterrender': function () {
                    this.setValue("taxsum"); 
                }
            }
        });

        app.elements.allgraphics = Ext.create("Ext.panel.Panel", {
            tbar: {
                xtype: 'panel',
                height: 60,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'tbfill'
                    },
                    app.elements.graphSelector
                ]
            },
            id: 'allGraphics',
            title: app.locale("Graph"),
            layout: "border",
            items: [
                {
                    xtype: "panel",
                    region: "center",
                    html: "<div id='chart_graph'></div>"
                }
            ]
        });

        app.elements.licensegridDetail = Ext.create("Ext.grid.Panel", {
            title: app.locale("Licenses"),
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/licenses',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "CP_LicenseNumber",
                    text: app.locale("LicenseNumber"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_LicenseUINRD",
                    text: app.locale("LicenseUINRD"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_LicenseSeries",
                    text: app.locale("LicenseSeries"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_DateVydachi",
                    text: app.locale("DateVydachi"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_LicenseStatus",
                    text: app.locale("LicenseStatus"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Srok_deistv_license",
                    text: app.locale("Srok_deistv_license"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Srok_pr_license",
                    text: app.locale("Srok_pr_license"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });

        app.elements.checkgridDetail = Ext.create("Ext.grid.Panel", {
            title: app.locale("Checks"),
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/checks',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "CP_BIN",
                    text: app.locale("CP_BIN"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Name_prov_object",
                    text: app.locale("CP_Name_prov_object"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Risk_group",
                    text: app.locale("CP_Risk_group"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Category_pred",
                    text: app.locale("CP_Category_pred"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Date_prov_Subject",
                    text: app.locale("CP_Date_prov_Subject"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Prov_Gos_Organ",
                    text: app.locale("CP_Prov_Gos_Organ"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });

        app.elements.certificategridDetail = Ext.create("Ext.grid.Panel", {
            title: app.locale("Certificate"),
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/certificates',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "CP_ops",
                    text: app.locale("ops"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Date_reg",
                    text: app.locale("Date_reg"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "CP_Date_expire",
                    text: app.locale("Date_expire"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "CP_Certificate_Number",
                    text: app.locale("Certificate_Number"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Product_manufacturer",
                    text: app.locale("Product_manufacturer"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_N_T_B_of_products",
                    text: app.locale("N_T_B_of_products"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Comp_reg",
                    text: app.locale("Comp_reg"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Applicant",
                    text: app.locale("Applicant"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Basis_iss_cert",
                    text: app.locale("Basis_iss_cert"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Rukov_OPS",
                    text: app.locale("Rukov_OPS"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Dop_Info",
                    text: app.locale("Dop_Info"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Expert_auditor",
                    text: app.locale("Expert_auditor"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "CP_Certificate_type",
                    text: app.locale("Certificate_type"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });

        app.elements.goszakupgridDetail = Ext.create("Ext.grid.Panel", {
            title: app.locale("GosZakupNotSelf"),
            id: "goszakupgridDetail",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/goszakupdetail/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "Name",
                    text: app.locale("customer"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "BIN",
                    text: app.locale("customer_bin"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "sign_date",
                    text: app.locale("sign_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "ec_end_date",
                    text: app.locale("ec_end_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "plan_exec_date",
                    text: app.locale("plan_exec_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "fakt_exec_date",
                    text: app.locale("fakt_exec_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "contract_sum_wnds",
                    text: app.locale("contract_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "fakt_sum_wnds",
                    text: app.locale("fakt_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "description_ru",
                    text: app.locale("description_ru"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "ref_contract_status",
                    text: app.locale("ref_contract_status"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });

        app.elements.goszakupgridDetailSelf = Ext.create("Ext.grid.Panel", {
            title: app.locale("GosZakupSelf"),
            id: "goszakupgridDetailSelf",
            store: Ext.create("Ext.data.Store", {
                remoteFilter: true,
                pageSize: 25,
                proxy: {
                    type: "ajax",
                    url: 'api/goszakupdetailself/compare',
                    isSynchronous: false,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    reader: {
                        type: 'json',
                        root: 'objects',
                        totalProperty: 'count'
                    }
                }
            }),
            columns: [
                {
                    dataIndex: "Name",
                    text: app.locale("supplier"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "BIN",
                    text: app.locale("supplier_biin"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "sign_date",
                    text: app.locale("sign_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "ec_end_date",
                    text: app.locale("ec_end_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "plan_exec_date",
                    text: app.locale("plan_exec_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "fakt_exec_date",
                    text: app.locale("fakt_exec_date"),
                    cellWrap: true,
                    flex: 1,
                    xtype: 'datecolumn',
                    format: 'Y-m-d'
                },
                {
                    dataIndex: "contract_sum_wnds",
                    text: app.locale("contract_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "fakt_sum_wnds",
                    text: app.locale("fakt_sum_wnds"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "description_ru",
                    text: app.locale("description_ru"),
                    cellWrap: true,
                    flex: 1
                },
                {
                    dataIndex: "ref_contract_status",
                    text: app.locale("ref_contract_status"),
                    cellWrap: true,
                    flex: 1
                }
            ]
        });

        app.elements.pasportgridMain = Ext.create("Ext.panel.Panel", {
            title: app.locale("Main"),
            autoScroll: true,
            layout: {
                type: 'vbox',
            },
            defaults: {
                width: "100%"
            },
            items: [
                app.elements.pasportgridCompare,
                app.elements.taxesgridCompare,
                app.elements.licensegridCompare,
                app.elements.gcvpCompare,
                app.elements.certificategridCompare,
                app.elements.gosgridCompare,
                app.elements.goszakupgridCompare,
                app.elements.checkgridCompare
            ]
        });

        app.elements.licenseDetailWindow = Ext.create("Ext.window.Window", {
            title: app.locale("Detail"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            activeTab: 0,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: [
                app.elements.licensegridDetail
            ]
        });

        app.elements.checkDetailWindow = Ext.create("Ext.window.Window", {
            title: app.locale("Detail"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            activeTab: 0,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: [
                app.elements.checkgridDetail
            ]
        });

        app.elements.certificatesDetailWindow = Ext.create("Ext.window.Window", {
            title: app.locale("Detail"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            activeTab: 0,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: [
                app.elements.certificategridDetail
            ]
        });

        app.elements.goszakupDetailWindow = Ext.create("Ext.window.Window", {
            title: app.locale("Detail"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            activeTab: 0,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.tab.Panel", {
                listeners: {
                    'tabchange': function (tabPanel, tab) {
                        app.handlers.tabchange(tab.id, tab);
                    }
                },
                items: [
                    app.elements.goszakupgridDetail,
                    app.elements.goszakupgridDetailSelf
                ]
            })
        });

        app.elements.comparePasportsWindow = Ext.create("Ext.window.Window", {
            title: app.locale("PasportAll"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            activeTab: 0,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.tab.Panel", {
                listeners: {
                    'tabchange': function (tabPanel, tab) {
                        app.handlers.tabchange(tab.id, tab);
                    }
                },
                items: [
                    app.elements.pasportgridMain,
                    app.elements.allgraphics
                ]
            })
        });
        // Конец дополнительных компонентов

        //вклад в регион
        app.elements.areachartwindow = Ext.create("Ext.window.Window", {
            title: app.locale("AreaChart"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.panel.Panel", {
                html: "<div id='areachart'></div>"
            })
        });
        //вклад в регион количетсво работников
        app.elements.EmplCountAreachartwindow = Ext.create("Ext.window.Window", {
            title: app.locale("AreaChart"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.panel.Panel", {
                tbar: {
                    items: [{
                        xtype: 'fieldcontainer',
                        defaultType: 'radiofield',
                        defaults: {
                            margin: "5 5 5 5"                            
                        },
                        id: 'employers_radiofield',
                        layout: 'hbox',
                        items: [
                            {
                                boxLabel: 'Абсолютное',
                                checked: true,
                                id: 'emp_1'
                            },
                            {
                                boxLabel: 'Сравнительное',
                                id: 'emp_2',
                                listeners: {
                                    change: app.handlers.EmplCountAreachartbtnclick
                                }
                            }
                        ],
                        listeners: {
                            change: function (that, newValue, oldValue) {
                                console.log(that, newValue);
                            }
                        }
                    }]
                },
                html: "<div id='EmplCountAreachart'></div>"
            })
        });

        //вклад в регион гос поддержка
        app.elements.GovSupportAreachartwindow = Ext.create("Ext.window.Window", {
            title: app.locale("AreaChart"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.panel.Panel", {
                tbar: {
                    items: [{
                        xtype: 'fieldcontainer',
                        defaultType: 'radiofield',
                        defaults: {
                            margin: "5 5 5 5"
                        },
                        id: 'govsupport_radiofield',
                        layout: 'hbox',
                        items: [
                            {
                                boxLabel: 'Абсолютное',
                                checked: true,                                
                                id: 'gov_1'
                            }, {
                                boxLabel: 'Сравнительное',
                                id: 'gov_2',
                                listeners: {
                                    change: app.handlers.GovSupportAreachartbtnclick
                                }
                            }
                        ]
                    }]
                },
                layout: 'hbox',
                items: [
                    {
                        xtype: "panel",
                        flex: 5,
                        height: '100%',
                        html: "<div id='GovSupportAreachart'></div>",
                    },
                    {
                        xtype: "combobox",
                        flex: 1,
                        store: Ext.create("Ext.data.Store", {
                            data: [
                                { "id": -1, "name": app.locale("All") },
                                { "id": 0, "name": app.locale("RoadMap") },
                                { "id": 1, "name": app.locale("AgroBusiness") },
                                { "id": 2, "name": app.locale("APK") },
                                { "id": 3, "name": app.locale("Other") }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id',
                        concept: "Support_Type",
                        listeners: {
                            change: app.handlers.govSupportTypeChange
                        }
                    }
                    
                ]
                })
        });

        //вклад в регион гос закуп
        app.elements.GosZakupAreachartwindow = Ext.create("Ext.window.Window", {
            title: app.locale("AreaChart"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 100,
            modal: true,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.panel.Panel", {                
                html: "<div id='GosZakupAreachart'></div>"
            })
        });

        //вклад в регион геокарта
        app.elements.GovSupportMapwindow = Ext.create("Ext.window.Window", {
            title: app.locale("GeoMap"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 300,
            modal: true,
            closeAction: "hide",
            resizable: false,
            layout: "fit",
            items: Ext.create("Ext.panel.Panel", {
                html: "<div id='GovSupportGeoMap'></div>"
            })
        });

        app.elements.NalogDetailswindow = Ext.create("Ext.window.Window", {
            title: app.locale("Налог"),
            height: app.elements.body.getHeight() - 100,
            width: app.elements.body.getWidth() - 300,
            modal: true,
            closeAction: "hide",
            resizable: false,
            autoScroll: true,
            layout: "fit",
            items: [
                {
                    id: "nalog",
                    html: "<div id='chart_nalog' style='height:800px'></div>"
                }
            ]
        });

    };
    app.helpers = {
        orders: {},
        columns: ["First_organisation", "Second_organisation", "Third_organisation", "Forth_organisation", "Fifth_organisation"],
        saveOrders: function () {
            app.helpers.orders = {};
            Ext.Array.each(app.buffer.comparingRecords, function (r, ri) {
                app.helpers.orders[r.data.BIN] = ri;
            });
        },
        fillColumns: function (grid, records) {
            
            var store = grid.getStore();
            store.removeAll();
            var propertiesContainer = [];
            var new_record = {};
    
            if (grid == app.elements.licensegridCompare || grid == app.elements.certificategridCompare || grid == app.elements.goszakupgridCompare || grid == app.elements.checkgridCompare) {
                propertiesContainer[app.locale("Count")] = [];
                $.each(records, function (idx, record) {
                    new_record["Property_Names"] = app.locale("Count");
                    Ext.Array.each(Object.keys(record.data), function (bin, index, recordItself) {
                        if (bin !== "id") {
                            var column = app.helpers.columns[app.helpers.orders[bin]];
                            new_record[column] = record.data[bin];
                        }
                    });
                });

                store.add(new_record);
            }
            else if (grid == app.elements.pasportgridCompare) {
                records = app.buffer.comparingRecords;
                console.log(records);
                $.each(records, function (idx, record) {
                    Ext.Array.each(Object.keys(record.data), function (k, index, recordItself) {
                        if (k !== "id" && k !== "Id" && k !== "Lat" && k !== "Lng" && record.data[k] !== null) {
                            if (!(app.locale(k) in propertiesContainer)) {
                                propertiesContainer[app.locale(k)] = [];
                            }
                            propertiesContainer[app.locale(k)].push(record.data[k]);
                        }
                    });
                });

                for (var key in propertiesContainer) {
                    new_record = { Property_Names: key };
                    for (let i = 0; i < propertiesContainer[key].length; i++) {
                        new_record[app.helpers.columns[i]] = propertiesContainer[key][i];
                    }
                    store.add(new_record);
                }
            }
        },
        directory: function (config) {
            console.log(config);
            var container = { toCheckChildren: true };
                container.treepanel = Ext.create("Ext.tree.Panel", {
                id: "DIR" + config.concept,
                rootVisible: false,
                tbar: Ext.create("Ext.panel.Panel", {
                    hidden: true,
                    height: 30,
                    items: [
                        {
                            xtype: "textfield",
                            width: 200
                        }
                    ]
                }),
                store: Ext.create("Ext.data.TreeStore", {
                    //fields: [{
                    //    name: 'checked',
                    //    type: 'boolean',
                    //    defaultValue: false,
                    //    persist: false
                    //}],
                    proxy: {
                        type: "ajax",
                        url: 'api/directory?concept=' + config.concept + '&main=' + app.buffer.main,
                        isSynchronous: false,
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        reader: {
                            type: 'json'
                        }
                    },
                    listeners: {
                        load: function (options) {
                            if (app.buffer.main === 1) {
                                if (config.concept === "KATO") {
                                    var WinKATO = app.elements["WKATO"];
                                    Ext.Array.each(options.data.items, function (el) {
                                        if (el.raw.Id === app.URLParams.regionId) {
                                            WinKATO.items.items[0].selModel.select(el);
                                        }
                                    });
                                    app.handlers.directoryapplybtnclick(WinKATO);
                                }
                            }
                        }
                    }
                }),
                multiSelect: true,
                selModel: Ext.create("Ext.selection.CheckboxModel", {
                    checkOnly: true,
                    showHeaderCheckbox: false,
                    listeners: {
                        deselect: function (sm, record, index, eOpts) {
                            if (container.toCheckChildren) {
                                record.cascadeBy(function (n) {
                                    sm.deselect(n, true, false);
                                });
                            } else {
                                if (record.raw.id === "root") {
                                    return false;
                                }
                            }

                            if (record.parentNode !== null && record.parentNode.childNodes !== null) {
                                var isAllElemSelected = false;
                                Ext.Array.each(record.parentNode.childNodes, function (n) {
                                    isAllElemSelected = sm.isSelected(n);
                                    if (!isAllElemSelected)
                                        return false;
                                });

                                if (!isAllElemSelected) {
                                    container.toCheckChildren = false;
                                    sm.deselect(record.parentNode, true, false);
                                    container.toCheckChildren = true;
                                }
                            }
                        },
                        select: function (sm, record, index, eOpts) {
                            if (container.toCheckChildren) {
                                record.cascadeBy(function (n) {
                                    sm.select(n, true, false);
                                });
                            } else {
                                if (record.id === "root" || record.raw.id === "root") {                                    
                                    return false;
                                }
                            }

                            if (record.parentNode !== null && record.parentNode.childNodes !== null) {
                                var isAllElemSelected = false;
                                Ext.Array.each(record.parentNode.childNodes, function (n) {
                                    isAllElemSelected = sm.isSelected(n);
                                    console.log(isAllElemSelected);
                                    if (!isAllElemSelected)
                                        return false;
                                });

                                if (isAllElemSelected) {
                                    container.toCheckChildren = false;
                                    sm.select(record.parentNode, true, false);
                                    container.toCheckChildren = true;
                                }
                            }
                        }
                    }
                })
            });

            var window = Ext.create("Ext.window.Window", {
                bbar: {
                    items: [
                        { xtype: 'tbfill' },
                        {
                            text: app.locale("Apply"),
                            margin: "5 5 5 5",
                            handler: function () {
                                app.handlers.directoryapplybtnclick(window);
                            }
                        }
                    ]
                },
                id: "WIN" + config.concept,
                title: app.locale(config.concept),
                concept: config.concept,
                height: 700,
                width: 700,
                modal: true,
                closeAction: "hide",
                resizable: false,
                layout: "fit",
                items: container.treepanel 
            });

            return window;
        },
        mapclass: function (config) {
            var me = {
                isCreate: false,
                self: null,
                baselayer: null,
                setView: function () {
                    me.self.setView([51.602478, 64.015555], 8);
                },
                clear: function () {

                    me.baselayer.eachLayer(function (layer) {
                        me.baselayer.removeLayer(layer);
                    });

                },
                addmarker: function (coords, toClear, setView) {
                    me.create();
                    if (toClear !== false)
                        me.clear();
                    var marker = L.marker(coords, {});
                    me.baselayer.addLayer(marker)
                    if (setView !== false)
                        me.self.setView(coords, 14);
                    return marker;
                },
                create: function () {
                    if (this.isCreate === false) {
                        var mapcont = document.getElementById(config.renderTo);

                        me.self = L.map(mapcont, {
                            center: [51.602478, 64.015555],
                            zoom: 8
                        });

                        me.isCreate = true;

                        var attribution = '&copy; Разработано <a href="http://curs.kz" title="ТОО ЦУРС" target="_blank">ТОО ЦУРС</a>';

                        var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: attribution });

                        var google = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                            maxZoom: 20,
                            attribution: attribution,
                            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                        });

                        var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                            maxZoom: 20,
                            attribution: attribution,
                            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                        });

                        var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                            maxZoom: 20,
                            attribution: attribution,
                            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                        });

                        var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
                            maxZoom: 20,
                            attribution: attribution,
                            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                        });

                        var osmLight = L.tileLayer("http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png", {
                            attribution: attribution
                        });


                        me.self.addLayer(google);

                        L.control.layers({
                            "OSM": osm,
                            "Google": google,
                            "googleSat": googleSat,
                            "googleHybrid": googleHybrid,
                            "googleTerrain": googleTerrain,
                            "osmLight": osmLight
                        }).addTo(this.self);

                        me.baselayer = config.groupping === true ? L.markerClusterGroup() : L.layerGroup();
                        me.self.addLayer(me.baselayer);
                    }
                }
            };
            return me;
        },
        highcharts: {
            spider: function (data) {
                $("#" + data.renderTo).highcharts({
                    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                    chart: { 
                        polar: true,
                        type: 'line',
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, '#2a2a2b'],
                                [1, '#3e3e40']
                            ]
                        },
                        style: {
                            fontFamily: 'sans-serif'
                        },
                        plotBorderColor: '#606063',
                        renderTo: data.renderTo
                    },

                    title: {
                        text: data.title,
                        x: -80,
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase',
                            fontSize: '20px'
                        }
                    },

                    pane: {
                        size: '80%'
                    },

                    xAxis: {
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        categories: data.categories,
                        tickmarkPlacement: 'on',
                        lineWidth: 0,
                        gridLineColor: '#707073',
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        title: {
                            style: {
                                color: '#A0A0A3'
                            }
                        }
                    },

                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        labels: {
                            enabled: false,
                            style: {
                                color: '#E0E0E3'
                            }
                        }
                    },

                    tooltip: {
                        enabled: true,
                        formatter: function () {
                            return '<span style="color:{' + this.color + '}">' + this.x + ': <b>' + this.point.Value + '</b>'
                                + ((this.point.AgrItemCount !== null) ? '<br/>Количество компаний: ' + this.point.AgrItemCount : '');
                            /*
                            return '<span style="color:{' + this.points[0].color + '}">' + this.points[0].x + ': <b>' + this.points[0].point.Value + '</b>'
                                + ((this.points[0].point.AgrItemCount !== null) ? '<br/>Количество компаний: ' + this.points[0].point.AgrItemCount : '');
                                */
                        }
                    },

                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        //y: 70,
                        layout: 'horizontal',
                        itemStyle: {
                            color: '#E0E0E3'
                        },
                        itemHoverStyle: {
                            color: '#FFF'
                        },
                        itemHiddenStyle: {
                            color: '#606063'
                        }
                    },
                    plotOptions: {
                        area: {
                            stacking: 'percent',
                            lineColor: '#ffffff',
                            lineWidth: 1,
                            marker: {
                                lineWidth: 1,
                                lineColor: '#ffffff'
                            }
                        }
                    },
                    series: data.series

                });
            },
            draw: function (data) {
                $("#chart").empty();
                var response = {
                    title: data.title,
                    measures: !app.helpers.isEmpty(data.measures) ? data.measures : '',
                    data: {
                        labels: data.categories,
                        series: data.series,
                    },
                    subtitle: data.subtitle
                };
                console.log(response.data.series);
                var yAxisLabels = {
                    formatter: function () {
                        var string = this.value.toString();
                        if (this.value >= 1000000 && this.value < 1000000000) string = this.value / 1000000 + ' млн.';
                        else if (this.value >= 1000000000 && this.value < 1000000000000) string = this.value / 1000000000 + ' млрд.';
                        return string;
                    },
                    enabled: true,
                    style: {
                        color: '#E0E0E3',
                        fontSize: 16
                    }
                };
                var tooltip = { enabled: true };
                var plotoptions = {};

                if (data.stacking === true) {
                    tooltip = {
                        enabled: true,
                        pointFormat: '{point.percentage:.1f}%</b> ({point.Value:,.0f})<br/>',
                        split: true,
                    };

                    plotoptions = {
                        area: {
                            stacking: 'percent',
                            lineColor: '#ffffff',
                            lineWidth: 1,
                            marker: {
                                lineWidth: 1,
                                lineColor: '#ffffff'
                            }
                        },
                    };
                }

                if ('click' in data) {
                    plotoptions["series"] = {
                        events: {
                            click: data.click
                        }
                    }
                }
                $("#" + data.renderTo).highcharts({
                    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                    chart: {
                        type: data.type,
                        marginBottom: 200,
                        marginTop: 100,
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, '#2a2a2b'],
                                [1, '#3e3e40']
                            ]
                        },
                        style: {
                            fontFamily: 'sans-serif'
                        },
                        plotBorderColor: '#606063',
                        layoutAlgorithm: data.layoutAlgorithm,
                    },
                    title: {
                        text: response.title, align: "center",
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase',
                            fontSize: '20px'
                        }
                    },
                    xAxis: {
                        categories: !app.helpers.isEmpty(response.data.labels) ? response.data.labels : "",
                        labels: {
                            style: {
                                color: '#E0E0E3',
                                fontSize: 16
                            },
                            step: 0, enabled: true,
                        },
                        lineWidth: 1,
                        gridLineColor: '#707073',
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        title: {
                            style: {
                                color: '#A0A0A3'
                            }
                        }
                    },
                    yAxis: [
                        {
                            title: {
                                text: response.measures.length > 0 ? response.measures[0] : '',
                                style: {
                                    color: '#E0E0E3',
                                    fontSize: 16
                                }
                            }, gridLineWidth: 0, labels: yAxisLabels, opposite: false
                        },
                        {
                            title: {
                                text: response.measures.length > 1 ? response.measures[1] : '',
                                style: {
                                    color: '#E0E0E3',
                                    fontSize: 16
                                }
                            }, gridLineWidth: 0, labels: yAxisLabels, opposite: true
                        },
                        {
                            title: {
                                text: response.measures.length > 2 ? response.measures[2] : '',
                                style: {
                                    color: '#E0E0E3',
                                    fontSize: 16
                                }
                            }, gridLineWidth: 0, labels: yAxisLabels, opposite: true
                        },
                        {
                            title: {
                                text: response.measures.length > 3 ? response.measures[3] : '',
                                style: {
                                    color: '#E0E0E3',
                                    fontSize: 16
                                }
                            }, gridLineWidth: 0, allowDecimals: false, labels: yAxisLabels, opposite: false
                        }
                    ],
                    legend: {
                        enabled: true,
                        align: "center",
                        floating: true,
                        y: 0,
                        itemStyle: {
                            color: '#E0E0E3',
                            fontSize: 16
                        },
                        itemHoverStyle: {
                            color: '#FFF'
                        },
                        itemHiddenStyle: {
                            color: '#606063'
                        }
                    },
                    tooltip: tooltip,
                    credits: { enabled: false },
                    plotOptions: !app.helpers.isEmpty(data.plotoptions) ? data.plotoptions : plotoptions,
                    series: response.data.series
                });
                $("#chart_nalog").highcharts({
                    
                    colorAxis: {
                        minColor: '#363638',
                        maxColor: Highcharts.getOptions().colors[0]
                    },
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, '#2a2a2b'],
                                [1, '#3e3e40']
                            ]
                        },
                        style: {
                            fontFamily: 'sans-serif',
                            color: '#000',
                            fontSize: '17px',
                            fontWeight: 'normal',
                        },
                    },
                    tooltip: {
                        valueSuffix: ' тг',
                        style: {
                            color: '#000',
                            fontSize: '17px',
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                        }
                    },
                    title: {
                        text: response.title, align: "center",
                        style: {
                            color: '#fff',
                            //textTransform: 'uppercase',
                            fontSize: '20px',
                            fontFamily: 'sans-serif',
                            fontStyle: 'normal',
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: response.data.series
                });
            }
        },
        getGraph: function (type) {
            let filters = [];
            $.each(app.buffer.comparingRecords, function (idx, record) {
                app.elements.licensegridCompare.getStore().clearFilter(true);
                filters.push({ property: "RegistrUL" + idx, value: record.data.Id })
            });

            var title = "";
            var measure = "";
            if (type == "taxsum") {
                title = app.locale("TaxSum");
                measure = ["тенге"];
            } else if (type == "paidtaxsum") {
                title = app.locale("PaidTaxSum");
                measure = ["тенге"];
            } else if (type == "salaryavg") {
                title = app.locale("SalaryAvg");
                measure = ["тенге"];
            } else if (type == "emplcount") {
                title = app.locale("EmplCount");
                measure = ["человек"];
            } else if (type == "goszakup-postavshik") {
                title = app.locale("GosZakupPostavshik");
                measure = ["тенге"];
            } else if (type == "goszakup-zakazchik") {
                title = app.locale("GosZakupZakazchik");
                measure = ["тенге"];
            }

            $.ajax("api/graphics/compare", {
                method: "GET",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                async: true,
                data: {
                    filter: JSON.stringify(filters),
                    type: type,
                    lang: app.lang
                },
                success: function (result, response) {
                    result.renderTo = "chart_graph";
                    result.title = title;
                    result.measures = measure;
                    app.elements.graphSelector.setValue(type); 

                    $('#chart_graph').empty();
                    app.helpers.highcharts.draw(result);
                }
            });
        },
        makeConfigForMap: function (renderTo, chartData) {
            REGION_CITY_COD = "390000000"; // Kostanay

            var config = CURSJS.config();
            config.renderTo = renderTo;
            config.regionCode = REGION_CITY_COD;
            config.valueformat = 1;
            config.title = chartData.title;
            config.scale = [
                { to: 0, color: '#A4E7FC' },
                { from: 0, to: 1, color: '#52BFE3' },
                { from: 1, to: 2, color: '#30A4C9' },
                { from: 2, to: 3, color: '#228FB3' },
                { from: 3, to: 4, color: '#0C6987' }
            ];

            var schemeHelper = CURSJS.scheme(config);

            var schemeData = {};

            chartData.data
                .forEach(function (item) {
                    // 0 кып кызыл
                    // 1 кызыл
                    // 2 сары
                    // 3 жасыл
                    // 4 жап жасыл             

                    item.val = item.value;

                    schemeData[item.cod] = item;
                });

            config.onItemClick = function (e) {     
                if (params.onLayerClick) {
                    params.onLayerClick(e);
                }
            }

            if (config.regionCode) {
                schemeHelper.draw(schemeData);
            }
        },
        isEmpty: function (data) {
            return (
                data === undefined ||
                data === null ||
                (typeof data === 'string' && data.trim().length === 0) ||
                (typeof data === 'object' && Object.keys(data).length === 0)
            );
        },
        changeTitle: function (title) {
            if (!app.helpers.isEmpty(title)) {
                app.elements.body.setTitle(title);
                document.title = title;
            }
        },
    };
    app.buffer = {
        ObjectsCount: null,
        record: null,
        ObjectType: 0,
        comparingRecords: [],
        recordInDetail: null,
        extrafilter: null,
        isStarted: false,
        username: null,
        hidden: false,
        main: null,
        title: null
    };
    app.handlers = {
        govSupportTypeChange: function (combo, value) {            
            app.buffer.extrafilter = { property: "GovSupportType", value };
            app.handlers.GovSupportAreachartbtnclick();
        },
        govSupportBarClick: function (e) {
            var filter = "";
            if (this.name == "Выбранные компании") {
                var f = app.methods.getFiltersFromStore();
                app.buffer.extrafilter != null ? f.push(app.buffer.extrafilter) : null;
                filter = JSON.stringify(f)
            }

            setTimeout(function () {
                app.elements.GovSupportMapwindow.show();
                $.ajax("api/area/map/govsupport", {
                    method: "GET",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: {
                        filter: filter,
                        year: e.point.category,
                        type: app.elements.GovSupportAreachartwindow.items.items[0].dockedItems.items[0].items.items[0].items.items[1].checked
                    },
                    success: function (result, response) {
                        var renderTo = "GovSupportGeoMap";
                        app.helpers.makeConfigForMap(renderTo, result);
                    }
                });
            }, 500);
        },
        langChange: function (combo, records, eOpts) {
            window.location.href = window.location.pathname + "?lang=" + records.id
        },
        homeClick: function () {
            // window.location.reload();
            window.location.href = "http://dashboard.curs.kz:443/kostanay/organisations_main/pages/map.html";
        },
        goszakupDetail: function (column) {
            if (app.buffer.comparingRecords.length > column - 1) {
                var index = app.buffer.comparingRecords[column - 1].data.Id;
                app.buffer.recordInDetail = index;
                app.elements.goszakupDetailWindow.show();
                app.elements.goszakupgridDetail.getStore().clearFilter(true);
                app.elements.goszakupgridDetail.getStore().addFilter([{ property: "RegistrUL", value: index }]);
            }    
        },
        certificatesDetail: function (column) {
            if (app.buffer.comparingRecords.length > column - 1) {
                var index = app.buffer.comparingRecords[column - 1].data.Id;

                app.elements.certificatesDetailWindow.show();
                app.elements.certificategridDetail.getStore().clearFilter(true);
                app.elements.certificategridDetail.getStore().addFilter([{ property: "RegistrUL", value: index }]);
            }            
        },
        licensesDetail: function (column) {
            if (app.buffer.comparingRecords.length > column - 1) {
                var index = app.buffer.comparingRecords[column - 1].data.Id;

                app.elements.licenseDetailWindow.show();
                app.elements.licensegridDetail.getStore().clearFilter(true);
                app.elements.licensegridDetail.getStore().addFilter([{ property: "RegistrUL", value: index }]);
            }            
        },
        checkDetail: function (column) {
            if (app.buffer.comparingRecords.length > column - 1) {
                var index = app.buffer.comparingRecords[column - 1].data.Id;

                app.elements.checkDetailWindow.show();
                app.elements.checkgridDetail.getStore().clearFilter(true);
                app.elements.checkgridDetail.getStore().addFilter([{ property: "RegistrUL", value: index }]);
            }            
        },
        graphSelectorChange: function (cbox, record) {
            app.helpers.getGraph(record.data.type);
        },
        filterbtnclick: function () {
            console.log(this.concept);
            var e = app.elements["W" + this.concept];
            console.log(e);
            if (e !== undefined) {
                e.show();
            }
            else {
                app.elements["W" + this.concept] = app.helpers.directory({
                    concept: this.concept
                });
                app.elements["W" + this.concept].show();
            }
        },
        directoryapplybtnclick: function (win) {
            var oldItems = [];
            var filtersContainer = document.getElementById('filteritems');
            for (let i = 0; i < filtersContainer.children.length; i++) {
                var el = filtersContainer.children[i];
                console.log("fi old: ", el);
                if (el.getAttribute("concept") === win.concept) {
                    el.remove();
                }
            }
            console.log("window items:", win.items.items);
            Ext.Array.each(win.items.items[0].getSelectionModel().selected.items, function (record) {
                console.log("fi: ", record.data);
                app.handlers.directorygridrowclick(record, win.concept);
            });
            win.hide();
            app.handlers.searchbtnclick();
        },
        directorygridrowclick: function (record, concept) {
            var item = document.getElementById("fi_" + record.data.Id);
            var cont = document.getElementById("filteritems");
            
            if (item !== null) {                
                // item.remove();
            }
            else {
                if (record.data.leaf === false)
                    return false;
                item = document.createElement("div");
                item.id = "fi_" + record.data.Id;
                item.classList.add("filteritem");
                item.setAttribute("val", record.data.Id);
                item.setAttribute("concept", concept);
                item.innerText = record.data.text;
                item.ondblclick = function () {
                    item.remove();
                };
                cont.appendChild(item);
            }
        },
        searchbtnclick: function () {
            app.elements.store.clearFilter(true);
            var cont = document.getElementById("filteritems");
            console.log(cont);
            console.log(cont.children);
            var filters = [];
            Ext.Array.each(cont.children, function (el, index) {
                console.log(el);
                console.log(index);
                filters.push({ property: el.getAttribute("concept") + index, value: el.getAttribute("val") });
            });
            // ЮЛ ил ФЛ
            if (app.buffer.main === 1) {
                filters.push({ property: 'IE_check', value: app.buffer.ObjectType });
            }

            //поиск по названию или БИН
            var term = app.elements.btnbar.items.items[0].getValue();
            if (term.length > 0) {
                filters.push({ property: "Name", value: term });
            }

            //поиск по лицензиям
            var license = app.elements.filterextrabar.items.items[15].getValue();
            if (license !== null) {
                filters.push({ property: "License", value: license });
            }

            //поиск по сертификатам
            var certificate = app.elements.filterextrabar.items.items[16].getValue();
            if (certificate !== null) {
                filters.push({ property: "Certificate", value: certificate });
            }

            //поиск по гос учреждениям
            var gosechrezhdenie = app.elements.filterextrabar.items.items[17].getValue();
            if (gosechrezhdenie !== null) {
                filters.push({ property: "GosUchrezhdenie", value: gosechrezhdenie });
            }

            //поиск по участию в гос закупках
            var goszakup = app.elements.filterextrabar.items.items[18].getValue();
            if (goszakup !== null) {
                filters.push({ property: "GosZakup", value: goszakup });
            }

            var goszakupfbn = app.elements.filterextrabar.items.items[19].getValue();
            if (goszakupfbn !== null) {
                filters.push({ property: "GosZakupFBN", value: goszakupfbn });
            }

            var goszakupnadlok = app.elements.filterextrabar.items.items[20].getValue();
            if (goszakupnadlok !== null) {
                filters.push({ property: "GosZakupNadlok", value: goszakupnadlok });
            }
            

            //поиск по налогам
            var tax = app.methods.getFiltersByConcept("Tax");
            if (tax.from !== null || tax.to !== null)
                if (tax.from !== 0 && tax.to !== 0)
                    filters.push(tax);

            //поиск по численности сотрудников
            var strength = app.methods.getFiltersByConcept("Strength");
            if (strength.from !== null || strength.to !== null)
                if (strength.from !== 0 && strength.to !== 0)
                    filters.push(strength);

            //поиск по зп
            var salary = app.methods.getFiltersByConcept("Salary");

            if (salary.from !== null || salary.to !== null)
                if (salary.from !== 0 && salary.to !== 0)
                    filters.push(salary);
            
            app.elements.grid.store.addFilter(filters);
        },
        clearbtnclick: function () {
            
            if (app.buffer.ObjectType == "0") {
                app.elements.store.clearFilter();
            } else {                
                app.elements.store.clearFilter(true);
                app.elements.store.addFilter([{ property: "IE_check", value: 1 }]);
            }

            app.elements.btnbar.items.items[0].setValue("");
            var cont = document.getElementById("filteritems");
            Ext.Array.each(cont.children, function (el) {
                el.remove();
            });

            Ext.Array.each(app.elements.filterextrabar.items.items, function (el) {
                if (el.concept === "SalaryMax" || el.concept === "StrengthMax" || el.concept === "TaxMax") {
                    el.setValue(null);
                }
                else if (el.concept === "License" || el.concept === "Certificate" || el.concept === "GosZakup" || el.concept === "GosZakupFBN" || el.concept === "GosZakupNadlok") {
                    el.setValue(null);
                }   
                else if (el.concept === "SalaryMin" || el.concept === "StrengthMin" || el.concept === "TaxMin") {
                    el.setValue(null);
                }
                else if (el.concept === "Salary" || el.concept === "Strength" || el.concept === "Tax") {
                    el.setValue([null, null]);
                }
            });
            
        },
        objectrowdblclick: function (record) {
            if (app.buffer.main !== 1) {
                Ext.getCmp('TabId').getComponent('licesId').tab.hide();
                Ext.getCmp('TabId').getComponent('Certificates').tab.hide();
                Ext.getCmp('TabId').getComponent('GosZakupCustomerPanel').tab.hide();
                Ext.getCmp('TabId').getComponent('GosZakupSupplierPanel').tab.hide();
                Ext.getCmp('TabId').getComponent('GovSupport').tab.hide();
                Ext.getCmp('TabId').getComponent('checkgrid').tab.hide();
                Ext.getCmp('TabId').getComponent('analytics').tab.hide();
                Ext.getCmp('TabId').getComponent('spider').tab.hide();
                Ext.getCmp('TabId').getComponent('tab_gcvp').tab.hide();
                Ext.getCmp('TabId').getComponent('tab_tax').tab.hide();
                Ext.getCmp('TabId').getComponent('tab_map').tab.hide();
            }
            app.buffer.record = record;
            app.elements.pasportwindow.show();
            app.elements.pasportwindow.items.items[0].setActiveItem(0);
            var store = app.elements.pasportgrid.getStore();
            store.removeAll();
            var getPropKey = function (key) {
                switch (key) {
                    case "OKED":
                        return app.locale("OKED_Code")
                    case "OkedRu":
                        return app.locale("OKED")
                    case "Oked2":
                        return app.locale("OKED_2")
                    case "KRP":
                        return app.locale("KRP_Code")
                    case "KATO":
                        return app.locale("KATO_Code")
                    case "KATORu":
                        return app.locale("KATO")
                    case "KrpRu":
                        return app.locale("Dimension")
                    case "FioMother":
                        return app.locale("FIO_M")
                    case "FioFather":
                        return app.locale("FIO_F")
                    default:
                        return app.locale(key);
                }
            }
            Ext.Array.each(Object.keys(record.data), function (k) {

                if (k !== "id" && k !== "Id" && k !== "Lat" && k !== "Lng" && k !== "hidden" && k !== "Main" && k !== "HideM") {
                    var propKey = app.buffer.main !== 1 ? getPropKey(k) : app.locale(k);
                    store.add({
                        property: propKey,
                        value: record.data[k]
                    });
                }
            });
            app.elements.TreatmentForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
            app.elements.MeetForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
            app.elements.ContactsForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
            app.elements.CommentsForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
            app.elements.licensegrid.getStore().clearFilter(true);
            app.elements.licensegrid.getStore().addFilter([{ property: "RegistrUL", value: record.data.Id }]);

            app.elements.servicesgrid.getStore().clearFilter(true);
            app.elements.servicesgrid.getStore().addFilter([{ property: "RegistrUL", value: record.data.Id }]);            

            app.elements.TreatmentStore.addFilter([{ property: "BIN", value: record.data.BIN }]);
            app.elements.MeetStore.addFilter([{ property: "BIN", value: record.data.BIN }]);
            app.elements.ContactsStore.addFilter([{ property: "BIN", value: record.data.BIN }]);
            app.elements.CommentsStore.addFilter([{ property: "BIN", value: record.data.BIN }]);
        },
        tabchange: function (id, tab) {
            if (id === "tab_gcvp") {
                $.ajax("api/gcvp/chart", {
                    method: "GET",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: {
                        id: app.buffer.record.data.Id,
                        lang: app.lang
                    },
                    success: function (result, response) {
                        result.renderTo = "chart_gcvp";
                        result.title = app.locale("GCVP");
                        result.measures = ["тенге", "человек"];
                        app.helpers.highcharts.draw(result);
                    }
                });
            }
            else if (id === "analytics") {
                $.ajax("api/spider/directory/values", {
                    method: "GET",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: {
                        id: app.buffer.record.data.Id,
                        lang: app.lang
                    },
                    success: function (result, response) {
                        var tbar = app.elements.analyticspanel.dockedItems.items[0];
                        if (result.kato !== null) {
                            tbar.items.items[0].setValue(true);
                            tbar.items.items[1].defValue = result.kato;
                            tbar.items.items[1].setValue(result.kato);
                        }
                        else {
                            tbar.items.items[1].defValue = null;
                            tbar.items.items[0].setValue(false);
                        }
                        if (result.oked !== null) {
                            tbar.items.items[2].setValue(true);
                            tbar.items.items[3].defValue = result.oked;
                            tbar.items.items[3].setValue(result.oked);
                        }
                        else {
                            tbar.items.items[2].setValue(false);
                        }
                        if (result.krp !== null) {
                            tbar.items.items[4].setValue(true);
                            tbar.items.items[5].defValue = result.krp;
                            tbar.items.items[5].setValue(result.krp);
                        }
                        else {
                            tbar.items.items[4].setValue(false);
                        }

                        app.handlers.analyticschart();
                    }
                });
            }
            else if (id === "spider") {
                $.ajax("api/spider/directory/values", {
                    method: "GET",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: {
                        id: app.buffer.record.data.Id,
                        lang: app.lang
                    },
                    success: function (result, response) {
                        var tbar = app.elements.spiderpanel.dockedItems.items[0];
                        if (result.kato !== null) {
                            tbar.items.items[0].setValue(true);
                            tbar.items.items[1].defValue = result.kato;
                            tbar.items.items[1].setValue(result.kato);
                        }
                        else {
                            tbar.items.items[1].defValue = null;
                            tbar.items.items[0].setValue(false);
                        }
                        if (result.krp !== null) {
                            tbar.items.items[2].setValue(true);
                            tbar.items.items[3].defValue = result.krp;
                            tbar.items.items[3].setValue(result.krp);
                        }
                        else {
                            tbar.items.items[2].setValue(false);
                        }
                        if (result.oked !== null) {
                            tbar.items.items[4].setValue(true);
                            tbar.items.items[5].defValue = result.oked;
                            tbar.items.items[5].setValue(result.oked);
                        }
                        else {
                            tbar.items.items[4].setValue(false);
                        }

                        tbar.items.items[6].setValue(2015);

                        app.handlers.spiderchart();

                    }
                });
            }
            else if (id === "tab_tax") {
                $.ajax("api/tax/chart", {
                    method: "GET",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: {
                        id: app.buffer.record.data.Id,
                        lang: app.lang
                    },
                    success: function (result, response) {
                        result.renderTo = "chart_tax";
                        result.title = app.locale("Tax");
                        result.measures = ["тенге"];
                        result.plotoptions = {
                            series: {
                                cursor: 'pointer',
                                point: {
                                    events: {
                                        click: function (event) {
                                            
                                            var year = this.category;
                                            $.ajax("api/tax/chart/details", {
                                                method: "GET",
                                                dataType: "json",
                                                contentType: "application/json;charset=utf-8",
                                                async: true,
                                                data: {
                                                    BIN: app.buffer.record.data.BIN,
                                                    year: year,
                                                    lang: app.lang
                                                },
                                                success: function (result, response) {
                                                    app.elements.NalogDetailswindow.show();
                                                    result.renderTo = "chart_nalog";
                                                    result.title = app.locale("Детализация налогов по видам за " + year + " г.");
                                                    result.subtitle = app.locale("Nalog Subtitle");
                                                    app.helpers.highcharts.draw(result);
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        };
                        app.helpers.highcharts.draw(result);
                    }
                });
            }
            else if (id === "tab_map") {
                if (app.buffer.record.data.Lat !== null && app.buffer.record.data.Lng !== null) {
                    app.helpers.map.addmarker([app.buffer.record.data.Lat, app.buffer.record.data.Lng]);
                }
            }
            else if (id === "allGraphics") {
                app.helpers.getGraph("taxsum");

            }
            else if (id == "GosZakupCustomerPanel") {
                app.elements.goszakupCustomerGrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
                app.elements.goszakupfbnCustomerGrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
                app.elements.goszakupnadlokCustomerGrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
            }
            else if (id == "GosZakupSupplierPanel") {
                app.elements.goszakupSupplierGrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
                app.elements.goszakupfbnSupplierGrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
                app.elements.goszakupnadlokSupplierGrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
            }
            else if (id == "GovSupport") {
                app.elements.gossupportgrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
            }
            else if (id == "Certificates") {
                app.elements.certificategrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
            }
            else if (id == "goszakupgridDetail") {
                app.elements.goszakupgridDetail.getStore().addFilter({ property: "RegistrUL", value: app.buffer.recordInDetail });
            }
            else if (id == "goszakupgridDetailSelf") {
                app.elements.goszakupgridDetailSelf.getStore().addFilter({ property: "RegistrUL", value: app.buffer.recordInDetail });
            }
            else if (id == "checkgrid") {
                app.elements.checkgrid.getStore().addFilter({ property: "RegistrUL", value: app.buffer.record.data.Id });
            }
            else if (id == "treatmentGridId") {
                app.elements.TreatmentGrid;
            }
            else if (id == "meetGridId") {
                app.elements.MeetGrid;
            }
            else if (id == 'contactsGridId') {
                app.elements.ContactsGrid;
            }
            else if (id == 'commentsGridId') {
                app.elements.CommentsGrid;
            }
        },
        filterextrabtnclick: function () {
            if (app.elements.filterextrabar.hidden === true) {
                app.elements.filterextrabar.show();
            }
            else {
                app.elements.filterextrabar.hide();
            }
        },
        modebtnclick: function (btn) {
            if (app.elements.grid.hidden === true) {
                app.elements.body.items.items[1].hide();
                app.elements.grid.show();
                btn.setText(app.locale("OnMap"));
            }
            else {
                app.elements.grid.hide();
                app.elements.body.items.items[1].show();
                btn.setText(app.locale("Grid"));
                app.methods.mapmainreload();
                //app.elements.grid.getStore().setPageSize(1500);
                
            }
        },
        storeload: function () {
            if (app.elements.grid.hidden === true) {
                app.methods.mapmainreload();
            }

            if (app.buffer.ObjectsCount !== null) {
                if (!app.helpers.isEmpty(app.buffer.main) && app.buffer.main === 1) {
                    app.elements.filterbar.items.items[app.elements.filterbar.items.items.length - 4].setText("Найдено: " + app.elements.store.totalCount + " из " + app.buffer.ObjectsCount);
                } else {
                    app.elements.filterbar.items.items[app.elements.filterbar.items.items.length - 4].setText("Найдено: " + app.elements.store.totalCount);
                }
            }
            if (!app.helpers.isEmpty(app.buffer.username)) {
                app.elements.typeSelectorBar.items.items[app.elements.typeSelectorBar.items.items.length - 1].setText(app.locale("User") + ": " + app.buffer.username[0].data.username);
            }
        },
        sliderchange: function (a,value,c) {
            var min = this.getValues()[0] < this.getValues()[1] ? this.getValues()[0] : this.getValues()[1];
            var max = this.getValues()[0] > this.getValues()[1] ? this.getValues()[0] : this.getValues()[1];
            var concept = this.concept;
            Ext.Array.each(app.elements.filterextrabar.items.items, function (el) {
                if (concept + "Min" === el.concept) {
                    el.setValue(min);
                }
                else if (concept + "Max" === el.concept) {
                    el.setValue(max);
                }
            });
        },
        analyticsfiltercheckbox: function () {
            console.log(123);
            //this.checked
            var concept = this.concept;
            var checked = this.checked;
            Ext.Array.each(app.elements.analyticspanel.dockedItems.items[0].items.items, function (el) {
                if (el.xtype === "combobox" && el.concept === concept) {
                    if (checked === true) {
                        el.enable();
                        if (el.defValue !== null)
                            el.setValue(el.defValue);
                    }
                    else {
                        el.disable();
                        el.setValue(null);
                    }
                }
            });

            app.handlers.analyticschart();
        },
        analyticschart: function () {
            var tbar = app.elements.analyticspanel.dockedItems.items[0].items.items;

            $.ajax("api/spider/cagr", {
                method: "GET",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                async: true,
                data: {
                    id: app.buffer.record.data.Id,
                    lang: app.lang,
                    kato: tbar[1].disabled === true ? null : tbar[1].getValue(),
                    oked: tbar[3].disabled === true ? null : tbar[3].getValue(),
                    krp: tbar[5].disabled === true ? null : tbar[5].getValue(),
                    year: "2015"
                },
                success: function (result, response) {
                    result.renderTo = "chart_analytics";
                    result.title = app.locale("Analytics");
                    app.helpers.highcharts.spider(result);

                    var store = app.elements.analyticspanel.items.items[1].getStore();
                    store.removeAll();
                    store.add(result.grid);

                }
            });
        },
        areachartbtnclick: function () {
            app.elements.areachartwindow.show();
            $.ajax("api/area/chart", {
                method: "GET",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                async: true,
                data: {
                    filter: JSON.stringify(app.methods.getFiltersFromStore())
                },
                success: function (result, response) {
                    result.renderTo = "areachart";
                    result.title = "Валовый региональный продукт";
                    result.measures = ["млрд. тенге"];
                    app.helpers.highcharts.draw(result);
                }
            });
        },
        EmplCountAreachartbtnclick: function (el, checked) {
            console.log('Employers');
            var data = {
                filter: app.methods.getFiltersFromStore(),
                type: checked
            };

            setTimeout(function () {
                app.elements.EmplCountAreachartwindow.show();
                $.ajax("/api/area/chart/emplcount", {
                    method: "POST",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: JSON.stringify(data),
                    success: function (result, response) {
                        result.renderTo = "EmplCountAreachart";
                        result.title = "Занятость";
                        result.measures = ["человек"];
                        result.stacking = checked;
                        app.helpers.highcharts.draw(result);
                    }
                });
            }, 500);
        },
        GovSupportAreachartbtnclick: function (el, checked) {
            console.log('GovSupport');
            var f = app.methods.getFiltersFromStore();
            app.buffer.extrafilter !== null ? f.push(app.buffer.extrafilter) : null;
            
            var data = {
                filter: f,
                type: checked
            };

            setTimeout(function () {
                app.elements.GovSupportAreachartwindow.show();
                $.ajax("api/area/chart/govsupport", {
                    method: "POST",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: JSON.stringify(data),
                    success: function (result, response) {
                        result.renderTo = "GovSupportAreachart";
                        result.title = "Гос. поддержка";
                        result.type = "column";
                        result.measures = ["тыс. тенге"];
                        result.click = app.handlers.govSupportBarClick;
                        result.stacking = checked;
                        app.helpers.highcharts.draw(result);
                    }
                });
            }, 500);
        },
        GosZakupAreachartbtnclick: function () {
            setTimeout(function () {
                app.elements.GosZakupAreachartwindow.show();
                $.ajax("api/area/chart/goszakup", {
                    method: "POST",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    async: true,
                    data: JSON.stringify({
                        filter: app.methods.getFiltersFromStore(),
                        type: false // not necessary
                    }),
                    success: function (result, response) {
                        result.renderTo = "GosZakupAreachart";
                        result.title = "Гос. закуп";
                        result.measures = ["тенге"];
                        result.click = function (event) {
                            console.log(this);
                        };
                        app.helpers.highcharts.draw(result);
                    }
                });
            }, 500);
        },
        spiderfiltercheckbox: function () {
            var concept = this.concept;
            var checked = this.checked;
            Ext.Array.each(app.elements.spiderpanel.dockedItems.items[0].items.items, function (el) {
                if (el.xtype === "combobox" && el.concept === concept) {
                    if (checked === true) {
                        el.enable();
                        if (el.defValue !== null)
                            el.setValue(el.defValue);
                    }
                    else {
                        el.disable();
                        el.setValue(null);
                    }
                }
            });
        },
        spiderchart: function () {
            var tbar = app.elements.spiderpanel.dockedItems.items[0].items.items;

            $.ajax("api/spider/chart", {
                method: "GET",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                async: true,
                data: {
                    id: app.buffer.record.data.Id,
                    lang: app.lang,
                    kato: tbar[1].disabled === true ? null : tbar[1].getValue(),
                    oked: tbar[5].disabled === true ? null : tbar[5].getValue(),
                    krp: tbar[3].disabled === true ? null : tbar[3].getValue(),
                    year: "2015"
                        //tbar[6].getValue() === null ? null : tbar[6].getValue()
                },
                success: function (result, response) {
                    result.renderTo = "chart_spider";
                    result.title = app.locale("Spider");
                    app.helpers.highcharts.spider(result);

                    var store = app.elements.spiderpanel.items.items[1].getStore();
                    store.removeAll();
                    store.add(result.grid);
                }
            });
        },
        addToCart: function (grid, rowIndex, colIndex, item) {            
            if (app.buffer.comparingRecords.length < 5) {    
                
                if (app.buffer.comparingRecords.indexOf(grid.getStore().getAt(rowIndex)) == -1) {
                    var el = grid.getStore().getAt(rowIndex);
                    el.order = app.buffer.comparingRecords.length + 1;
                    app.buffer.comparingRecords.push(el);
                }                
                app.elements.filterbar.items.items[app.elements.filterbar.items.items.length - 2].setText(app.buffer.comparingRecords.length + "/5");
                                               
            } else {                
                Ext.Msg.alert(app.locale('Attention'), app.locale('MaxIsReached'));                
            }         
        },
        removeFromCart: function (grid, rowIndex, colIndex, item) {
            if (app.buffer.comparingRecords.length > 0) {             
                
                if (app.buffer.comparingRecords.indexOf(grid.getStore().getAt(rowIndex)) != -1) {
                    app.buffer.comparingRecords.splice(app.buffer.comparingRecords.indexOf(grid.getStore().getAt(rowIndex)), 1);
                }

                app.elements.filterbar.items.items[app.elements.filterbar.items.items.length - 2].setText(app.buffer.comparingRecords.length + "/5");                
            } else {
                Ext.Msg.alert(app.locale('Attention'), app.locale('CartIsEmpty'));                
            }
        },
        onCartClick: function (el) {      
            if (app.buffer.comparingRecords.length > 0) {
                app.helpers.saveOrders();
                app.elements.comparePasportsWindow.show();
                
                app.helpers.fillColumns(app.elements.pasportgridCompare);
                
                app.elements.comparePasportsWindow.items.items[0].setActiveItem(0);

                let filters = [];
                $.each(app.buffer.comparingRecords, function (idx, record) {
                    app.elements.licensegridCompare.getStore().clearFilter(true);
                    filters.push({ property: "RegistrUL" + idx, value: record.data.Id })
                });

                app.elements.licensegridCompare.getStore().clearFilter(true);
                app.elements.licensegridCompare.getStore().addFilter(filters);

                app.elements.taxesgridCompare.getStore().clearFilter(true);
                app.elements.taxesgridCompare.getStore().addFilter(filters);

                app.elements.gcvpCompare.getStore().clearFilter(true);
                app.elements.gcvpCompare.getStore().addFilter(filters);

                app.elements.certificategridCompare.getStore().clearFilter(true);
                app.elements.certificategridCompare.getStore().addFilter(filters);

                app.elements.gosgridCompare.getStore().clearFilter(true);
                app.elements.gosgridCompare.getStore().addFilter(filters);

                app.elements.goszakupgridCompare.getStore().clearFilter(true);
                app.elements.goszakupgridCompare.getStore().addFilter(filters);

                app.elements.checkgridCompare.getStore().clearFilter(true);
                app.elements.checkgridCompare.getStore().addFilter(filters);
            } else {
                Ext.Msg.alert(app.locale('Attention'), app.locale('NoElementsToCompare'));
            }
        },        
        typeSelectorChange: function (field, newValue, oldValue) {
            app.handlers.clearCart();
            var cont = document.getElementById("filteritems");
            var filters = [];
            Ext.Array.each(cont.children, function (el, index) {                
                filters.push({ property: el.getAttribute("concept") + index, value: el.getAttribute("val") });
            });
            filters.push({ property: 'IE_check', value: newValue.statusType });           

            app.buffer.ObjectType = newValue.statusType;
            app.handlers.getAllObjectsCount(newValue.statusType);
            
            app.elements.grid.store.clearFilter(true);
            app.elements.grid.store.addFilter(filters);
        },
        getAllObjectsCount: function (filter) {
            $.ajax("api/register/count", {
                method: "GET",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                async: true,
                data: {
                    IE_check: filter
                },
                success: function (result, response) {
                    app.buffer.ObjectsCount = result.count;
                }
            });
        },
        clearCart: function () {
            app.buffer.comparingRecords.splice(0, app.buffer.comparingRecords.length);
            app.elements.filterbar.items.items[app.elements.filterbar.items.items.length - 2].setText(app.buffer.comparingRecords.length + "/5");
        },
    /*Add Additional information (Дополнительные сведение) items: treatment, meet, contacts, comments*/
        addTreatmentItems: function (grid, rowIndex, colIndex) {
            if (!app.helpers.isEmpty(rowIndex)) {
                var bin = grid.getStore().data.items;
                if (bin.length > 0) {
                    app.elements.TreatmentForm.reset();
                    app.elements.TreatmentForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                    app.elements.TreatmentForm.getForm().setValues(bin[rowIndex].data);
                }
            }
        },
        addMeetItems: function (grid, rowIndex, colIndex) {
            if (!app.helpers.isEmpty(rowIndex)) {
                var meet = grid.getStore().data.items;
                var MeetData = grid.getStore().data.items[rowIndex].data.MeetDate.substr(0, 10);
                var MeetTime = grid.getStore().data.items[rowIndex].data.MeetTime.substr(11, 8);
                console.log(meet);
                if (meet.length > 0) {
                    app.elements.MeetForm.reset();
                    app.elements.MeetForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                    app.elements.MeetForm.getForm().setValues(meet[rowIndex].data);
                    Ext.getCmp('MeetDate').setValue(MeetData);
                    Ext.getCmp('MeetTime').setValue(MeetTime);
                }
            }
        },
        addContactsItems: function (grid, rowIndex, colIndex) {
            if (!app.helpers.isEmpty(rowIndex)) {
                var contact = grid.getStore().data.items;
                console.log(contact);
                if (contact.length > 0) {
                    app.elements.ContactsForm.reset();
                    app.elements.ContactsForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                    app.elements.ContactsForm.getForm().setValues(contact[rowIndex].data);
                }
            }
        },
        addCommentsItems: function (grid, rowIndex, colIndex) {
            if (!app.helpers.isEmpty(rowIndex)) {
                var comment = grid.getStore().data.items;
                if (comment.length > 0) {
                    app.elements.CommentsForm.reset();
                    app.elements.CommentsForm.getForm().setValues({ "BIN": app.buffer.record.data.BIN });
                    app.elements.CommentsForm.getForm().setValues(comment[rowIndex].data);
                }
            }
        },
        sortheaderclcik: function (column, e, t, eOpts) {
            app.elements.store.sorters.clear();
            //app.elements.store.sort([{ property: column.dataIndex, direction: column.sortState }]);
            app.elements.store.sorters.add(new Ext.util.Sorter({ property: column.dataIndex, direction: column.sortState }));
        }
    };
    app.methods = {
        getFiltersFromStore: function () {
            var filters = [];
            Ext.Array.each(app.elements.store.getFilters().items, function (f) {
                filters.push({ property: f._property, value: f._value, from: f.from, to: f.to });
            });

            return filters;
        },
        getFiltersByConcept: function (concept) {
            var result = {
                property: concept,
                from: null,
                to: null,
                value: -1
            };

            Ext.Array.each(app.elements.filterextrabar.items.items, function (el) {
                if (concept + "Min" === el.concept) {
                    result.from = el.getValue();
                }
                else if (concept + "Max" === el.concept) {
                    result.to = el.getValue();
                }
            });

            return result;
        },
        getFiltersBySlider: function (el) {
            var result = {
                property: el.concept,
                from: null,
                to: null,
                value: -1
            };
            if (el.getValues()[0] !== el.minValue) {
                result.from = el.getValues()[0];
            }
            if (el.getValues()[1] !== el.maxValue) {
                result.to = el.getValues()[1];
            }

            return result;
        },
        mapmainreload: function () {
            app.helpers.mapmain.create();
            app.helpers.mapmain.clear();
            app.helpers.mapmain.setView();
            
            app.elements.store.each(function (org) {
                if (org.data.Lat !== null && org.data.Lng !== null) {
                    var marker = app.helpers.mapmain.addmarker([org.data.Lat, org.data.Lng], false, false);
                    marker.on('click', function (e) {
                        app.handlers.objectrowdblclick(org);
                    });
                    marker.bindPopup(org.data.Name, { minWidth: 200 });
                }
            });
        },
        setSize: function (el, target) {
            var elem = document.getElementById(el);
            elem.style.height = target.getHeight() + "px";
            elem.style.width = target.getWidth() + "px";
        },
        getDeepAllChildNodes: function (node) {
            var allNodes = new Array();            

            if (!node.hasChildNodes()) {
                return node;
            } else {
                allNodes.push(node);
                node.eachChild(function (Mynode) { allNodes = allNodes.concat(getDeepAllChildNodes(Mynode)); });
            }
            return allNodes;
        }
    };
    app.start = function () {
        app.getURLParams();
        app.create();

        //карта для паспорта
        app.helpers.map = app.helpers.mapclass({ renderTo: "map" });
        //карта для реестра
        app.helpers.mapmain = app.helpers.mapclass({ renderTo: "register_map", groupping: true });
        if (Object.keys(app.URLParams).length !== 0 && app.URLParams.type !== undefined && app.URLParams.regionId !== undefined) {            
            //общее количество объектов
            app.handlers.getAllObjectsCount(app.URLParams.type);

            app.elements.typeSelectorBar.items.items[2].suspendEvents();
            app.elements.typeSelectorBar.items.items[2].setValue({ statusType: app.URLParams.type });
            app.elements.typeSelectorBar.items.items[2].resumeEvents();

            app.buffer.isStarted = true;
            app.buffer.ObjectType = app.URLParams.type;
            /*
            var filter = [];
            filter.push({ property: "IE_check", value: app.URLParams.type });
            filter.push({ property: "CurrentStatus", value: 1 });

            $.ajax("api/getkatochildren", {
                method: "GET",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                async: false,
                data: {
                    kato: app.URLParams.regionId
                },
                success: function (result, response) {
                    $.each(result, function (idx, region) {                        
                        filter.push({ property: "KATO" + idx, value: region });
                    });
                }
            });
            */
            var btnKATO = Ext.get('KATO');
            btnKATO.dom.click();    
            var WinKATO = app.elements["WKATO"];
            WinKATO.hide();
            // app.elements.grid.store.addFilter(filter);
        } else {
            //общее количество объектов
            app.handlers.getAllObjectsCount(0);

            app.elements.grid.store.addFilter([{ property: "CurrentStatus", value: 1 }]);
        }
        if (!app.helpers.isEmpty(app.buffer.main) && app.buffer.main === 1) {
            app.handlers.directorygridrowclick({ data: { Id: 1, text: "Активный" } }, "CurrentStatus");
        }
    };
    app.start();
});