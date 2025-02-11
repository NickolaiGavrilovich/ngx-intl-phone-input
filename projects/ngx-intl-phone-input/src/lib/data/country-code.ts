import {Injectable} from "@angular/core";
import {CountryISO} from '../enums/country-iso.enum';

@Injectable()
export class CountryCode {
	public allCountries = {
		en: [
		[
			'Afghanistan (‫افغانستان‬‎)',
			CountryISO.Afghanistan,
			'93'
		],
		[
			'Albania (Shqipëri)',
			CountryISO.Albania,
			'355'
		],
		[
			'Algeria (‫الجزائر‬‎)',
			CountryISO.Algeria,
			'213'
		],
		[
			'American Samoa',
			'as',
			'1',
			1,
			[
				'684',
			]
		],
		[
			'Andorra',
			CountryISO.Andorra,
			'376'
		],
		[
			'Angola',
			CountryISO.Angola,
			'244'
		],
		[
			'Anguilla',
			'ai',
			'1',
			1,
			[
				'264',
			]
		],
		[
			'Antigua and Barbuda',
			'ag',
			'1',
			1,
			[
				'268',
			]
		],
		[
			'Argentina',
			CountryISO.Argentina,
			'54'
		],
		[
			'Armenia (Հայաստան)',
			CountryISO.Armenia,
			'374'
		],
		[
			'Aruba',
			CountryISO.Aruba,
			'297'
		],
		[
			'Australia',
			CountryISO.Australia,
			'61',
			0
		],
		[
			'Austria (Österreich)',
			CountryISO.Austria,
			'43'
		],
		[
			'Azerbaijan (Azərbaycan)',
			CountryISO.Azerbaijan,
			'994'
		],
		[
			'Bahamas',
			'bs',
			'1',
			1,
			[
				'242',
			]
		],
		[
			'Bahrain (‫البحرين‬‎)',
			CountryISO.Bahrain,
			'973'
		],
		[
			'Bangladesh (বাংলাদেশ)',
			CountryISO.Bangladesh,
			'880'
		],
		[
			'Barbados',
			'bb',
			'1',
			1,
			[
				'246',
			]
		],
		[
			'Belarus (Беларусь)',
			CountryISO.Belarus,
			'375'
		],
		[
			'Belgium (België)',
			CountryISO.Belgium,
			'32'
		],
		[
			'Belize',
			CountryISO.Belize,
			'501'
		],
		[
			'Benin (Bénin)',
			CountryISO.Benin,
			'229'
		],
		[
			'Bermuda',
			'bm',
			'1',
			1,
			[
				'441',
			]
		],
		[
			'Bhutan (འབྲུག)',
			CountryISO.Bhutan,
			'975'
		],
		[
			'Bolivia',
			CountryISO.Bolivia,
			'591'
		],
		[
			'Bosnia and Herzegovina (Босна и Херцеговина)',
			CountryISO.BosniaAndHerzegovina,
			'387'
		],
		[
			'Botswana',
			CountryISO.Botswana,
			'267'
		],
		[
			'Brazil (Brasil)',
			CountryISO.Brazil,
			'55'
		],
		[
			'British Indian Ocean Territory',
			CountryISO.BritishIndianOceanTerritory,
			'246'
		],
		[
			'British Virgin Islands',
			'vg',
			'1',
			1,
			[
				'284',
			]
		],
		[
			'Brunei',
			CountryISO.Brunei,
			'673'
		],
		[
			'Bulgaria (България)',
			CountryISO.Bulgaria,
			'359'
		],
		[
			'Burkina Faso',
			CountryISO.BurkinaFaso,
			'226'
		],
		[
			'Burundi (Uburundi)',
			CountryISO.Burundi,
			'257'
		],
		[
			'Cambodia (កម្ពុជា)',
			CountryISO.Cambodia,
			'855'
		],
		[
			'Cameroon (Cameroun)',
			CountryISO.Cameroon,
			'237'
		],
		[
			'Canada',
			CountryISO.Canada,
			'1',
			1,
			[
				'204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416',
				'418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587',
				'604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807',
				'819', '825', '867', '873', '902', '905'
			]
		],
		[
			'Cape Verde (Kabu Verdi)',
			CountryISO.CapeVerde,
			'238'
		],
		[
			'Caribbean Netherlands',
			CountryISO.CaribbeanNetherlands,
			'599',
			1
		],
		[
			'Cayman Islands',
			'ky',
			'1',
			1,
			[
				'345',
			]
		],
		[
			'Central African Republic (République centrafricaine)',
			CountryISO.CentralAfricanRepublic,
			'236'
		],
		[
			'Chad (Tchad)',
			CountryISO.Chad,
			'235'
		],
		[
			'Chile',
			CountryISO.Chile,
			'56'
		],
		[
			'China (中国)',
			CountryISO.China,
			'86'
		],
		[
			'Christmas Island',
			CountryISO.ChristmasIsland,
			'61',
			2
		],
		[
			'Cocos (Keeling) Islands',
			CountryISO.Cocos,
			'61',
			1
		],
		[
			'Colombia',
			CountryISO.Colombia,
			'57'
		],
		[
			'Comoros (‫جزر القمر‬‎)',
			CountryISO.Comoros,
			'269'
		],
		[
			'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
			CountryISO.CongoDRCJamhuriYaKidemokrasiaYaKongo,
			'243'
		],
		[
			'Congo (Republic) (Congo-Brazzaville)',
			CountryISO.CongoRepublicCongoBrazzaville,
			'242'
		],
		[
			'Cook Islands',
			CountryISO.CookIslands,
			'682'
		],
		[
			'Costa Rica',
			CountryISO.CostaRica,
			'506'
		],
		[
			'Côte d’Ivoire',
			CountryISO.CôteDIvoire,
			'225'
		],
		[
			'Croatia (Hrvatska)',
			CountryISO.Croatia,
			'385'
		],
		[
			'Cuba',
			CountryISO.Cuba,
			'53'
		],
		[
			'Curaçao',
			CountryISO.Curaçao,
			'599',
			0
		],
		[
			'Cyprus (Κύπρος)',
			CountryISO.Cyprus,
			'357'
		],
		[
			'Czech Republic (Česká republika)',
			CountryISO.CzechRepublic,
			'420'
		],
		[
			'Denmark (Danmark)',
			CountryISO.Denmark,
			'45'
		],
		[
			'Djibouti',
			CountryISO.Djibouti,
			'253'
		],
		[
			'Dominica',
			CountryISO.Dominica,
			'1767'
		],
		[
			'Dominican Republic (República Dominicana)',
			CountryISO.DominicanRepublic,
			'1',
			2,
			['809', '829', '849']
		],
		[
			'Ecuador',
			CountryISO.Ecuador,
			'593'
		],
		[
			'Egypt (‫مصر‬‎)',
			CountryISO.Egypt,
			'20'
		],
		[
			'El Salvador',
			CountryISO.ElSalvador,
			'503'
		],
		[
			'Equatorial Guinea (Guinea Ecuatorial)',
			CountryISO.EquatorialGuinea,
			'240'
		],
		[
			'Eritrea',
			CountryISO.Eritrea,
			'291'
		],
		[
			'Estonia (Eesti)',
			CountryISO.Estonia,
			'372'
		],
		[
			'Ethiopia',
			CountryISO.Ethiopia,
			'251'
		],
		[
			'Falkland Islands (Islas Malvinas)',
			CountryISO.FalklandIslands,
			'500'
		],
		[
			'Faroe Islands (Føroyar)',
			CountryISO.FaroeIslands,
			'298'
		],
		[
			'Fiji',
			CountryISO.Fiji,
			'679'
		],
		[
			'Finland (Suomi)',
			CountryISO.Finland,
			'358',
			0
		],
		[
			'France',
			CountryISO.France,
			'33'
		],
		[
			'French Guiana (Guyane française)',
			CountryISO.FrenchGuiana,
			'594'
		],
		[
			'French Polynesia (Polynésie française)',
			CountryISO.FrenchPolynesia,
			'689'
		],
		[
			'Gabon',
			CountryISO.Gabon,
			'241'
		],
		[
			'Gambia',
			CountryISO.Gambia,
			'220'
		],
		[
			'Georgia (საქართველო)',
			CountryISO.Georgia,
			'995'
		],
		[
			'Germany (Deutschland)',
			CountryISO.Germany,
			'49'
		],
		[
			'Ghana (Gaana)',
			CountryISO.Ghana,
			'233'
		],
		[
			'Gibraltar',
			CountryISO.Gibraltar,
			'350'
		],
		[
			'Greece (Ελλάδα)',
			CountryISO.Greece,
			'30'
		],
		[
			'Greenland (Kalaallit Nunaat)',
			CountryISO.Greenland,
			'299'
		],
		[
			'Grenada',
			CountryISO.Grenada,
			'1473'
		],
		[
			'Guadeloupe',
			CountryISO.Guadeloupe,
			'590',
			0
		],
		[
			'Guam',
			'gu',
			'1',
			1,
			[
				'671',
			]
		],
		[
			'Guatemala',
			CountryISO.Guatemala,
			'502'
		],
		[
			'Guernsey',
			CountryISO.Guernsey,
			'44',
			1,
			[1481]
		],
		[
			'Guinea (Guinée)',
			CountryISO.Guinea,
			'224'
		],
		[
			'Guinea-Bissau (Guiné Bissau)',
			CountryISO.GuineaBissau,
			'245'
		],
		[
			'Guyana',
			CountryISO.Guyana,
			'592'
		],
		[
			'Haiti',
			CountryISO.Haiti,
			'509'
		],
		[
			'Honduras',
			CountryISO.Honduras,
			'504'
		],
		[
			'Hong Kong (香港)',
			CountryISO.HongKong,
			'852'
		],
		[
			'Hungary (Magyarország)',
			CountryISO.Hungary,
			'36'
		],
		[
			'Iceland (Ísland)',
			CountryISO.Iceland,
			'354'
		],
		[
			'India (भारत)',
			CountryISO.India,
			'91'
		],
		[
			'Indonesia',
			CountryISO.Indonesia,
			'62'
		],
		[
			'Iran (‫ایران‬‎)',
			CountryISO.Iran,
			'98'
		],
		[
			'Iraq (‫العراق‬‎)',
			CountryISO.Iraq,
			'964'
		],
		[
			'Ireland',
			CountryISO.Ireland,
			'353'
		],
		[
			'Isle of Man',
			CountryISO.IsleOfMan,
			'44',
			2,
			[1624]
		],
		[
			'Israel (‫ישראל‬‎)',
			CountryISO.Israel,
			'972'
		],
		[
			'Italy (Italia)',
			CountryISO.Italy,
			'39',
			0
		],
		[
			'Jamaica',
			'jm',
			'1',
			1,
			[
				'876',
			]
		],
		[
			'Japan (日本)',
			CountryISO.Japan,
			'81'
		],
		[
			'Jersey',
			CountryISO.Jersey,
			'44',
			3,
			[1534]
		],
		[
			'Jordan (‫الأردن‬‎)',
			CountryISO.Jordan,
			'962'
		],
		[
			'Kenya',
			CountryISO.Kenya,
			'254'
		],
		[
			'Kiribati',
			CountryISO.Kiribati,
			'686'
		],
		[
			'Kosovo',
			CountryISO.Kosovo,
			'383'
		],
		[
			'Kuwait (‫الكويت‬‎)',
			CountryISO.Kuwait,
			'965'
		],
		[
			'Kyrgyzstan (Кыргызстан)',
			CountryISO.Kyrgyzstan,
			'996'
		],
		[
			'Laos (ລາວ)',
			CountryISO.Laos,
			'856'
		],
		[
			'Latvia (Latvija)',
			CountryISO.Latvia,
			'371'
		],
		[
			'Lebanon (‫لبنان‬‎)',
			CountryISO.Lebanon,
			'961'
		],
		[
			'Lesotho',
			CountryISO.Lesotho,
			'266'
		],
		[
			'Liberia',
			CountryISO.Liberia,
			'231'
		],
		[
			'Libya (‫ليبيا‬‎)',
			CountryISO.Libya,
			'218'
		],
		[
			'Liechtenstein',
			CountryISO.Liechtenstein,
			'423'
		],
		[
			'Lithuania (Lietuva)',
			CountryISO.Lithuania,
			'370'
		],
		[
			'Luxembourg',
			CountryISO.Luxembourg,
			'352'
		],
		[
			'Macau (澳門)',
			CountryISO.Macau,
			'853'
		],
		[
			'Macedonia (FYROM) (Македонија)',
			CountryISO.Macedonia,
			'389'
		],
		[
			'Madagascar (Madagasikara)',
			CountryISO.Madagascar,
			'261'
		],
		[
			'Malawi',
			CountryISO.Malawi,
			'265'
		],
		[
			'Malaysia',
			CountryISO.Malaysia,
			'60'
		],
		[
			'Maldives',
			CountryISO.Maldives,
			'960'
		],
		[
			'Mali',
			CountryISO.Mali,
			'223'
		],
		[
			'Malta',
			CountryISO.Malta,
			'356'
		],
		[
			'Marshall Islands',
			CountryISO.MarshallIslands,
			'692'
		],
		[
			'Martinique',
			CountryISO.Martinique,
			'596'
		],
		[
			'Mauritania (‫موريتانيا‬‎)',
			CountryISO.Mauritania,
			'222'
		],
		[
			'Mauritius (Moris)',
			CountryISO.Mauritius,
			'230'
		],
		[
			'Mayotte',
			CountryISO.Mayotte,
			'262',
			1
		],
		[
			'Mexico (México)',
			CountryISO.Mexico,
			'52'
		],
		[
			'Micronesia',
			CountryISO.Micronesia,
			'691'
		],
		[
			'Moldova (Republica Moldova)',
			CountryISO.Moldova,
			'373'
		],
		[
			'Monaco',
			CountryISO.Monaco,
			'377'
		],
		[
			'Mongolia (Монгол)',
			CountryISO.Mongolia,
			'976'
		],
		[
			'Montenegro (Crna Gora)',
			CountryISO.Montenegro,
			'382'
		],
		[
			'Montserrat',
			'ms',
			'1',
			1,
			[
				'664',
			]
		],
		[
			'Morocco (‫المغرب‬‎)',
			CountryISO.Morocco,
			'212',
			0
		],
		[
			'Mozambique (Moçambique)',
			CountryISO.Mozambique,
			'258'
		],
		[
			'Myanmar (Burma) (မြန်မာ)',
			CountryISO.Myanmar,
			'95'
		],
		[
			'Namibia (Namibië)',
			CountryISO.Namibia,
			'264'
		],
		[
			'Nauru',
			CountryISO.Nauru,
			'674'
		],
		[
			'Nepal (नेपाल)',
			CountryISO.Nepal,
			'977'
		],
		[
			'Netherlands (Nederland)',
			CountryISO.Netherlands,
			'31'
		],
		[
			'New Caledonia (Nouvelle-Calédonie)',
			CountryISO.NewCaledonia,
			'687'
		],
		[
			'New Zealand',
			CountryISO.NewZealand,
			'64'
		],
		[
			'Nicaragua',
			CountryISO.Nicaragua,
			'505'
		],
		[
			'Niger (Nijar)',
			CountryISO.Niger,
			'227'
		],
		[
			'Nigeria',
			CountryISO.Nigeria,
			'234'
		],
		[
			'Niue',
			CountryISO.Niue,
			'683'
		],
		[
			'Norfolk Island',
			CountryISO.NorfolkIsland,
			'672'
		],
		[
			'North Korea (조선 민주주의 인민 공화국)',
			CountryISO.NorthKorea,
			'850'
		],
		[
			'Northern Mariana Islands',
			CountryISO.NorthernMarianaIslands,
			'1670'
		],
		[
			'Norway (Norge)',
			CountryISO.Norway,
			'47',
			0
		],
		[
			'Oman (‫عُمان‬‎)',
			CountryISO.Oman,
			'968'
		],
		[
			'Pakistan (‫پاکستان‬‎)',
			CountryISO.Pakistan,
			'92'
		],
		[
			'Palau',
			CountryISO.Palau,
			'680'
		],
		[
			'Palestine (‫فلسطين‬‎)',
			CountryISO.Palestine,
			'970'
		],
		[
			'Panama (Panamá)',
			CountryISO.Panama,
			'507'
		],
		[
			'Papua New Guinea',
			CountryISO.PapuaNewGuinea,
			'675'
		],
		[
			'Paraguay',
			CountryISO.Paraguay,
			'595'
		],
		[
			'Peru (Perú)',
			CountryISO.Peru,
			'51'
		],
		[
			'Philippines',
			CountryISO.Philippines,
			'63'
		],
		[
			'Poland (Polska)',
			CountryISO.Poland,
			'48'
		],
		[
			'Portugal',
			CountryISO.Portugal,
			'351'
		],
		[
			'Puerto Rico',
			CountryISO.PuertoRico,
			'1',
			3,
			['787', '939']
		],
		[
			'Qatar (‫قطر‬‎)',
			CountryISO.Qatar,
			'974'
		],
		[
			'Réunion (La Réunion)',
			CountryISO.Réunion,
			'262',
			0
		],
		[
			'Romania (România)',
			CountryISO.Romania,
			'40'
		],
		[
			'Russia (Россия)',
			CountryISO.Russia,
			'7',
			0,
			[
				'900',
				'901',
				'902',
				'903',
				'904',
				'905',
				'906',
				'908',
				'909',
				'910',
				'911',
				'912',
				'913',
				'914',
				'915',
				'916',
				'917',
				'918',
				'919',
				'920',
				'921',
				'922',
				'923',
				'924',
				'925',
				'926',
				'927',
				'928',
				'929',
				'930',
				'931',
				'932',
				'933',
				'934',
				'936',
				'937',
				'938',
				'939',
				'941',
				'942',
				'949',
				'950',
				'951',
				'952',
				'953',
				'954',
				'955',
				'956',
				'958',
				'959',
				'960',
				'961',
				'962',
				'963',
				'964',
				'965',
				'966',
				'967',
				'968',
				'969',
				'970',
				'971',
				'977',
				'978',
				'979',
				'980',
				'981',
				'982',
				'983',
				'984',
				'985',
				'986',
				'987',
				'988',
				'989',
				'990',
				'991',
				'992',
				'993',
				'994',
				'995',
				'996',
				'997',
				'999',
			]
		],
		[
			'Kazakhstan (Казахстан)',
			CountryISO.Kazakhstan,
			'7',
			1
		],
		[
			'Rwanda',
			CountryISO.Rwanda,
			'250'
		],
		[
			'Saint Barthélemy (Saint-Barthélemy)',
			CountryISO.SaintBarthélemy,
			'590',
			1
		],
		[
			'Saint Helena',
			CountryISO.SaintHelena,
			'290'
		],
		[
			'Saint Kitts and Nevis',
			CountryISO.SaintKittsAndNevis,
			'1869'
		],
		[
			'Saint Lucia',
			'lc',
			'1',
			1,
			[
				'758',
			]
		],
		[
			'Saint Martin (Saint-Martin (partie française))',
			CountryISO.SaintMartin,
			'590',
			2
		],
		[
			'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
			CountryISO.SaintPierreAndMiquelon,
			'508'
		],
		[
			'Saint Vincent and the Grenadines',
			'vc',
			'1',
			1,
			[
				'784',
			]
		],
		[
			'Samoa',
			CountryISO.Samoa,
			'685'
		],
		[
			'San Marino',
			CountryISO.SanMarino,
			'378'
		],
		[
			'São Tomé and Príncipe (São Tomé e Príncipe)',
			CountryISO.SãoToméAndPríncipe,
			'239'
		],
		[
			'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
			CountryISO.SaudiArabia,
			'966'
		],
		[
			'Senegal (Sénégal)',
			CountryISO.Senegal,
			'221'
		],
		[
			'Serbia (Србија)',
			CountryISO.Serbia,
			'381'
		],
		[
			'Seychelles',
			CountryISO.Seychelles,
			'248'
		],
		[
			'Sierra Leone',
			CountryISO.SierraLeone,
			'232'
		],
		[
			'Singapore',
			CountryISO.Singapore,
			'65'
		],
		[
			'Sint Maarten',
			'sx',
			'1',
			1,
			[
				'721',
			]
		],
		[
			'Slovakia (Slovensko)',
			CountryISO.Slovakia,
			'421'
		],
		[
			'Slovenia (Slovenija)',
			CountryISO.Slovenia,
			'386'
		],
		[
			'Solomon Islands',
			CountryISO.SolomonIslands,
			'677'
		],
		[
			'Somalia (Soomaaliya)',
			CountryISO.Somalia,
			'252'
		],
		[
			'South Africa',
			CountryISO.SouthAfrica,
			'27'
		],
		[
			'South Korea (대한민국)',
			CountryISO.SouthKorea,
			'82'
		],
		[
			'South Sudan (‫جنوب السودان‬‎)',
			CountryISO.SouthSudan,
			'211'
		],
		[
			'Spain (España)',
			CountryISO.Spain,
			'34'
		],
		[
			'Sri Lanka (ශ්‍රී ලංකාව)',
			CountryISO.SriLanka,
			'94'
		],
		[
			'Sudan (‫السودان‬‎)',
			CountryISO.Sudan,
			'249'
		],
		[
			'Suriname',
			CountryISO.Suriname,
			'597'
		],
		[
			'Svalbard and Jan Mayen',
			CountryISO.SvalbardAndJanMayen,
			'47',
			1
		],
		[
			'Swaziland',
			CountryISO.Swaziland,
			'268'
		],
		[
			'Sweden (Sverige)',
			CountryISO.Sweden,
			'46'
		],
		[
			'Switzerland (Schweiz)',
			CountryISO.Switzerland,
			'41'
		],
		[
			'Syria (‫سوريا‬‎)',
			CountryISO.Syria,
			'963'
		],
		[
			'Taiwan (台灣)',
			CountryISO.Taiwan,
			'886'
		],
		[
			'Tajikistan',
			CountryISO.Tajikistan,
			'992'
		],
		[
			'Tanzania',
			CountryISO.Tanzania,
			'255'
		],
		[
			'Thailand (ไทย)',
			CountryISO.Thailand,
			'66'
		],
		[
			'Timor-Leste',
			CountryISO.TimorLeste,
			'670'
		],
		[
			'Togo',
			CountryISO.Togo,
			'228'
		],
		[
			'Tokelau',
			CountryISO.Tokelau,
			'690'
		],
		[
			'Tonga',
			CountryISO.Tonga,
			'676'
		],
		[
			'Trinidad and Tobago',
			'tt',
			'1',
			1,
			[
				'868',
			]
		],
		[
			'Tunisia (‫تونس‬‎)',
			CountryISO.Tunisia,
			'216'
		],
		[
			'Turkey (Türkiye)',
			CountryISO.Turkey,
			'90'
		],
		[
			'Turkmenistan',
			CountryISO.Turkmenistan,
			'993'
		],
		[
			'Turks and Caicos Islands',
			CountryISO.TurksAndCaicosIslands,
			'1649'
		],
		[
			'Tuvalu',
			CountryISO.Tuvalu,
			'688'
		],
		[
			'U.S. Virgin Islands',
			'vi',
			'1',
			1,
			[
				'340',
			]
		],
		[
			'Uganda',
			CountryISO.Uganda,
			'256'
		],
		[
			'Ukraine (Україна)',
			CountryISO.Ukraine,
			'380'
		],
		[
			'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
			CountryISO.UnitedArabEmirates,
			'971'
		],
		[
			'United Kingdom',
			CountryISO.UnitedKingdom,
			'44',
			0
		],
		[
			'United States',
			CountryISO.UnitedStates,
			'1',
			0
		],
		[
			'Uruguay',
			CountryISO.Uruguay,
			'598'
		],
		[
			'Uzbekistan (Oʻzbekiston)',
			CountryISO.Uzbekistan,
			'998'
		],
		[
			'Vanuatu',
			CountryISO.Vanuatu,
			'678'
		],
		[
			'Vatican City (Città del Vaticano)',
			CountryISO.VaticanCity,
			'39',
			1
		],
		[
			'Venezuela',
			CountryISO.Venezuela,
			'58'
		],
		[
			'Vietnam (Việt Nam)',
			CountryISO.Vietnam,
			'84'
		],
		[
			'Wallis and Futuna',
			CountryISO.WallisAndFutuna,
			'681'
		],
		[
			'Western Sahara (‫الصحراء الغربية‬‎)',
			CountryISO.WesternSahara,
			'212',
			1
		],
		[
			'Yemen (‫اليمن‬‎)',
			CountryISO.Yemen,
			'967'
		],
		[
			'Zambia',
			CountryISO.Zambia,
			'260'
		],
		[
			'Zimbabwe',
			CountryISO.Zimbabwe,
			'263'
		],
		[
			'Åland Islands',
			CountryISO.ÅlandIslands,
			'358',
			1
		]
	],
	ru: [
		[
			'Афганистан (‫افغانستان‬‎)',
			CountryISO.Afghanistan,
			'93'
		],
		[
			'Албания (Shqipëri)',
			CountryISO.Albania,
			'355'
		],
		[
			'Алжир (‫الجزائر‬‎)',
			CountryISO.Algeria,
			'213'
		],
		[
			'Американское Самоа',
			'as',
			'1',
			1,
			[
				'684',
			]
		],
		[
			'Андорра',
			CountryISO.Andorra,
			'376'
		],
		[
			'Ангола',
			CountryISO.Angola,
			'244'
		],
		[
			'Ангилья',
			'ai',
			'1',
			1,
			[
				'264',
			]
		],
		[
			'Антигуа и Барбуда',
			'ag',
			'1',
			1,
			[
				'268',
			]
		],
		[
			'Аргентина',
			CountryISO.Argentina,
			'54'
		],
		[
			'Армения (Հայաստան)',
			CountryISO.Armenia,
			'374'
		],
		[
			'Аруба',
			CountryISO.Aruba,
			'297'
		],
		[
			'Австралия',
			CountryISO.Australia,
			'61',
			0
		],
		[
			'Австрия (Österreich)',
			CountryISO.Austria,
			'43'
		],
		[
			'Азербайджан (Azərbaycan)',
			CountryISO.Azerbaijan,
			'994'
		],
		[
			'Багамы',
			'bs',
			'1',
			1,
			[
				'242',
			]
		],
		[
			'Бахрейн (‫البحرين‬‎)',
			CountryISO.Bahrain,
			'973'
		],
		[
			'Бангладеш (বাংলাদেশ)',
			CountryISO.Bangladesh,
			'880'
		],
		[
			'Барбадос',
			'bb',
			'1',
			1,
			[
				'246',
			]
		],
		[
			'Беларусь (Беларусь)',
			CountryISO.Belarus,
			'375'
		],
		[
			'Бельгия (België)',
			CountryISO.Belgium,
			'32'
		],
		[
			'Белиз',
			CountryISO.Belize,
			'501'
		],
		[
			'Бенин (Bénin)',
			CountryISO.Benin,
			'229'
		],
		[
			'Бермуды',
			'bm',
			'1',
			1,
			[
				'441',
			]
		],
		[
			'Бутан (འབྲུག)',
			CountryISO.Bhutan,
			'975'
		],
		[
			'Боливия',
			CountryISO.Bolivia,
			'591'
		],
		[
			'Босния и Герцеговина (Босна и Херцеговина)',
			CountryISO.BosniaAndHerzegovina,
			'387'
		],
		[
			'Ботсвана',
			CountryISO.Botswana,
			'267'
		],
		[
			'Бразилия (Brasil)',
			CountryISO.Brazil,
			'55'
		],
		[
			'Британская территория в Индийском океане',
			CountryISO.BritishIndianOceanTerritory,
			'246'
		],
		[
			'Британские Виргинские острова',
			'vg',
			'1',
			1,
			[
				'284',
			]
		],
		[
			'Бруней',
			CountryISO.Brunei,
			'673'
		],
		[
			'Болгария (България)',
			CountryISO.Bulgaria,
			'359'
		],
		[
			'Буркино фасо',
			CountryISO.BurkinaFaso,
			'226'
		],
		[
			'Бурунди (Uburundi)',
			CountryISO.Burundi,
			'257'
		],
		[
			'Камбоджа (កម្ពុជា)',
			CountryISO.Cambodia,
			'855'
		],
		[
			'Камерун (Cameroun)',
			CountryISO.Cameroon,
			'237'
		],
		[
			'Канада',
			CountryISO.Canada,
			'1',
			1,
			[
				'204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416',
				'418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587',
				'604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807',
				'819', '825', '867', '873', '902', '905'
			]
		],
		[
			'Кабо-верде (Kabu Verdi)',
			CountryISO.CapeVerde,
			'238'
		],
		[
			'Бонэйр',
			CountryISO.CaribbeanNetherlands,
			'599',
			1
		],
		[
			'Острова Кайман',
			'ky',
			'1',
			1,
			[
				'345',
			]
		],
		[
			'Центральноафриканская Республика (République centrafricaine)',
			CountryISO.CentralAfricanRepublic,
			'236'
		],
		[
			'Чад (Tchad)',
			CountryISO.Chad,
			'235'
		],
		[
			'Чили',
			CountryISO.Chile,
			'56'
		],
		[
			'Китай (中国)',
			CountryISO.China,
			'86'
		],
		[
			'Остров Рождества',
			CountryISO.ChristmasIsland,
			'61',
			2
		],
		[
			'Кокосовые острова',
			CountryISO.Cocos,
			'61',
			1
		],
		[
			'Колумбия',
			CountryISO.Colombia,
			'57'
		],
		[
			'Коморы (‫جزر القمر‬‎)',
			CountryISO.Comoros,
			'269'
		],
		[
			'Конго (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
			CountryISO.CongoDRCJamhuriYaKidemokrasiaYaKongo,
			'243'
		],
		[
			'Конго (Republic) (Congo-Brazzaville)',
			CountryISO.CongoRepublicCongoBrazzaville,
			'242'
		],
		[
			'Острова Кука',
			CountryISO.CookIslands,
			'682'
		],
		[
			'Коста Рика',
			CountryISO.CostaRica,
			'506'
		],
		[
			'Кот-д`Ивуар',
			CountryISO.CôteDIvoire,
			'225'
		],
		[
			'Хорватия (Hrvatska)',
			CountryISO.Croatia,
			'385'
		],
		[
			'Куба',
			CountryISO.Cuba,
			'53'
		],
		[
			'Кюрасао',
			CountryISO.Curaçao,
			'599',
			0
		],
		[
			'Кипр (Κύπρος)',
			CountryISO.Cyprus,
			'357'
		],
		[
			'Чехия (Česká republika)',
			CountryISO.CzechRepublic,
			'420'
		],
		[
			'Дания (Danmark)',
			CountryISO.Denmark,
			'45'
		],
		[
			'Джибути',
			CountryISO.Djibouti,
			'253'
		],
		[
			'Доминикана',
			CountryISO.Dominica,
			'1767'
		],
		[
			'Доминиканская Республика (República Dominicana)',
			CountryISO.DominicanRepublic,
			'1',
			2,
			['809', '829', '849']
		],
		[
			'Эквадор',
			CountryISO.Ecuador,
			'593'
		],
		[
			'Египет (‫مصر‬‎)',
			CountryISO.Egypt,
			'20'
		],
		[
			'Сальвадор',
			CountryISO.ElSalvador,
			'503'
		],
		[
			'Экваториальная Гвинея (Guinea Ecuatorial)',
			CountryISO.EquatorialGuinea,
			'240'
		],
		[
			'Эритрея',
			CountryISO.Eritrea,
			'291'
		],
		[
			'Эстония (Eesti)',
			CountryISO.Estonia,
			'372'
		],
		[
			'Эфиопия',
			CountryISO.Ethiopia,
			'251'
		],
		[
			'Фолклендские острова (Islas Malvinas)',
			CountryISO.FalklandIslands,
			'500'
		],
		[
			'Фарерские острова (Føroyar)',
			CountryISO.FaroeIslands,
			'298'
		],
		[
			'Фиджи',
			CountryISO.Fiji,
			'679'
		],
		[
			'Финляндия (Suomi)',
			CountryISO.Finland,
			'358',
			0
		],
		[
			'Франция',
			CountryISO.France,
			'33'
		],
		[
			'Французская Гвиана (Guyane française)',
			CountryISO.FrenchGuiana,
			'594'
		],
		[
			'Французская Полинезия (Polynésie française)',
			CountryISO.FrenchPolynesia,
			'689'
		],
		[
			'Габон',
			CountryISO.Gabon,
			'241'
		],
		[
			'Гамбия',
			CountryISO.Gambia,
			'220'
		],
		[
			'Грузия (საქართველო)',
			CountryISO.Georgia,
			'995'
		],
		[
			'Германия (Deutschland)',
			CountryISO.Germany,
			'49'
		],
		[
			'Гана (Gaana)',
			CountryISO.Ghana,
			'233'
		],
		[
			'Гибралтар',
			CountryISO.Gibraltar,
			'350'
		],
		[
			'Греция (Ελλάδα)',
			CountryISO.Greece,
			'30'
		],
		[
			'Гринландия (Kalaallit Nunaat)',
			CountryISO.Greenland,
			'299'
		],
		[
			'Гренада',
			CountryISO.Grenada,
			'1473'
		],
		[
			'Гваделупа',
			CountryISO.Guadeloupe,
			'590',
			0
		],
		[
			'Гуам',
			'gu',
			'1',
			1,
			[
				'671',
			]
		],
		[
			'Гватемала',
			CountryISO.Guatemala,
			'502'
		],
		[
			'Гернси',
			CountryISO.Guernsey,
			'44',
			1,
			[1481]
		],
		[
			'Гвинея (Guinée)',
			CountryISO.Guinea,
			'224'
		],
		[
			'Гвинея-Биссау (Guiné Bissau)',
			CountryISO.GuineaBissau,
			'245'
		],
		[
			'Гайяна',
			CountryISO.Guyana,
			'592'
		],
		[
			'Гаити',
			CountryISO.Haiti,
			'509'
		],
		[
			'Гондурас',
			CountryISO.Honduras,
			'504'
		],
		[
			'Гонконг (香港)',
			CountryISO.HongKong,
			'852'
		],
		[
			'Венгрия (Magyarország)',
			CountryISO.Hungary,
			'36'
		],
		[
			'Исландия (Ísland)',
			CountryISO.Iceland,
			'354'
		],
		[
			'Индия (भारत)',
			CountryISO.India,
			'91'
		],
		[
			'Индонезия',
			CountryISO.Indonesia,
			'62'
		],
		[
			'Иран (‫ایران‬‎)',
			CountryISO.Iran,
			'98'
		],
		[
			'Ирак (‫العراق‬‎)',
			CountryISO.Iraq,
			'964'
		],
		[
			'Ирландия',
			CountryISO.Ireland,
			'353'
		],
		[
			'Остров Мэн',
			CountryISO.IsleOfMan,
			'44',
			2,
			[1624]
		],
		[
			'Израиль (‫ישראל‬‎)',
			CountryISO.Israel,
			'972'
		],
		[
			'Италия (Italia)',
			CountryISO.Italy,
			'39',
			0
		],
		[
			'Ямайка',
			'jm',
			'1',
			1,
			[
				'876',
			]
		],
		[
			'Япония (日本)',
			CountryISO.Japan,
			'81'
		],
		[
			'Джерси',
			CountryISO.Jersey,
			'44',
			3,
			[1534]
		],
		[
			'Джордан (‫الأردن‬‎)',
			CountryISO.Jordan,
			'962'
		],
		[
			'Кения',
			CountryISO.Kenya,
			'254'
		],
		[
			'Кирибати',
			CountryISO.Kiribati,
			'686'
		],
		[
			'Косово',
			CountryISO.Kosovo,
			'383'
		],
		[
			'Кувейт (‫الكويت‬‎)',
			CountryISO.Kuwait,
			'965'
		],
		[
			'Кыргызстан (Кыргызстан)',
			CountryISO.Kyrgyzstan,
			'996'
		],
		[
			'Лаос (ລາວ)',
			CountryISO.Laos,
			'856'
		],
		[
			'Латвия (Latvija)',
			CountryISO.Latvia,
			'371'
		],
		[
			'Ливан (‫لبنان‬‎)',
			CountryISO.Lebanon,
			'961'
		],
		[
			'Лесото',
			CountryISO.Lesotho,
			'266'
		],
		[
			'Либерия',
			CountryISO.Liberia,
			'231'
		],
		[
			'Ливия (‫ليبيا‬‎)',
			CountryISO.Libya,
			'218'
		],
		[
			'Лихтенштейн',
			CountryISO.Liechtenstein,
			'423'
		],
		[
			'Литва (Lietuva)',
			CountryISO.Lithuania,
			'370'
		],
		[
			'Люксембург',
			CountryISO.Luxembourg,
			'352'
		],
		[
			'Макао (澳門)',
			CountryISO.Macau,
			'853'
		],
		[
			'Македония (FYROM) (Македонија)',
			CountryISO.Macedonia,
			'389'
		],
		[
			'Мадагасккар (Madagasikara)',
			CountryISO.Madagascar,
			'261'
		],
		[
			'Малави',
			CountryISO.Malawi,
			'265'
		],
		[
			'Малайзия',
			CountryISO.Malaysia,
			'60'
		],
		[
			'Мальдивы',
			CountryISO.Maldives,
			'960'
		],
		[
			'Мали',
			CountryISO.Mali,
			'223'
		],
		[
			'Мальта',
			CountryISO.Malta,
			'356'
		],
		[
			'Маршалловы острова',
			CountryISO.MarshallIslands,
			'692'
		],
		[
			'Мартиника',
			CountryISO.Martinique,
			'596'
		],
		[
			'Мавритания (‫موريتانيا‬‎)',
			CountryISO.Mauritania,
			'222'
		],
		[
			'Маврикий (Moris)',
			CountryISO.Mauritius,
			'230'
		],
		[
			'Майотта',
			CountryISO.Mayotte,
			'262',
			1
		],
		[
			'Мексика (México)',
			CountryISO.Mexico,
			'52'
		],
		[
			'Микронезия',
			CountryISO.Micronesia,
			'691'
		],
		[
			'Молдова (Republica Moldova)',
			CountryISO.Moldova,
			'373'
		],
		[
			'Монако',
			CountryISO.Monaco,
			'377'
		],
		[
			'Монголия (Монгол)',
			CountryISO.Mongolia,
			'976'
		],
		[
			'Монтенегро (Crna Gora)',
			CountryISO.Montenegro,
			'382'
		],
		[
			'Монтсеррат',
			'ms',
			'1',
			1,
			[
				'664',
			]
		],
		[
			'Марокко (‫المغرب‬‎)',
			CountryISO.Morocco,
			'212',
			0
		],
		[
			'Мозамбик (Moçambique)',
			CountryISO.Mozambique,
			'258'
		],
		[
			'Мьянма (Burma) (မြန်မာ)',
			CountryISO.Myanmar,
			'95'
		],
		[
			'Намибия (Namibië)',
			CountryISO.Namibia,
			'264'
		],
		[
			'Науру',
			CountryISO.Nauru,
			'674'
		],
		[
			'Непал (नेपाल)',
			CountryISO.Nepal,
			'977'
		],
		[
			'Нидерланды (Nederland)',
			CountryISO.Netherlands,
			'31'
		],
		[
			'Новая Каледония (Nouvelle-Calédonie)',
			CountryISO.NewCaledonia,
			'687'
		],
		[
			'Новая Зеландия',
			CountryISO.NewZealand,
			'64'
		],
		[
			'Никарагуа',
			CountryISO.Nicaragua,
			'505'
		],
		[
			'Нигер (Nijar)',
			CountryISO.Niger,
			'227'
		],
		[
			'Нигерия',
			CountryISO.Nigeria,
			'234'
		],
		[
			'Ниуэ',
			CountryISO.Niue,
			'683'
		],
		[
			'Остров Норфолк',
			CountryISO.NorfolkIsland,
			'672'
		],
		[
			'Северная Корея (조선 민주주의 인민 공화국)',
			CountryISO.NorthKorea,
			'850'
		],
		[
			'Северные Марианские острова',
			CountryISO.NorthernMarianaIslands,
			'1670'
		],
		[
			'Норвегия (Norge)',
			CountryISO.Norway,
			'47',
			0
		],
		[
			'Оман (‫عُمان‬‎)',
			CountryISO.Oman,
			'968'
		],
		[
			'Пакистан (‫پاکستان‬‎)',
			CountryISO.Pakistan,
			'92'
		],
		[
			'Палау',
			CountryISO.Palau,
			'680'
		],
		[
			'Палестина (‫فلسطين‬‎)',
			CountryISO.Palestine,
			'970'
		],
		[
			'Панама (Panamá)',
			CountryISO.Panama,
			'507'
		],
		[
			'Папуа Новая Гвинея',
			CountryISO.PapuaNewGuinea,
			'675'
		],
		[
			'Парагвай',
			CountryISO.Paraguay,
			'595'
		],
		[
			'Перу (Perú)',
			CountryISO.Peru,
			'51'
		],
		[
			'Филиппины',
			CountryISO.Philippines,
			'63'
		],
		[
			'Польша (Polska)',
			CountryISO.Poland,
			'48'
		],
		[
			'Португалия',
			CountryISO.Portugal,
			'351'
		],
		[
			'Пуэрто Рико',
			CountryISO.PuertoRico,
			'1',
			3,
			['787', '939']
		],
		[
			'Катар (‫قطر‬‎)',
			CountryISO.Qatar,
			'974'
		],
		[
			'Реюньон (La Réunion)',
			CountryISO.Réunion,
			'262',
			0
		],
		[
			'Румыния (România)',
			CountryISO.Romania,
			'40'
		],
		[
			'Россия',
			CountryISO.Russia,
			'7',
			0,
			[
				'900',
				'901',
				'902',
				'903',
				'904',
				'905',
				'906',
				'908',
				'909',
				'910',
				'911',
				'912',
				'913',
				'914',
				'915',
				'916',
				'917',
				'918',
				'919',
				'920',
				'921',
				'922',
				'923',
				'924',
				'925',
				'926',
				'927',
				'928',
				'929',
				'930',
				'931',
				'932',
				'933',
				'934',
				'936',
				'937',
				'938',
				'939',
				'941',
				'942',
				'949',
				'950',
				'951',
				'952',
				'953',
				'954',
				'955',
				'956',
				'958',
				'959',
				'960',
				'961',
				'962',
				'963',
				'964',
				'965',
				'966',
				'967',
				'968',
				'969',
				'970',
				'971',
				'977',
				'978',
				'979',
				'980',
				'981',
				'982',
				'983',
				'984',
				'985',
				'986',
				'987',
				'988',
				'989',
				'990',
				'991',
				'992',
				'993',
				'994',
				'995',
				'996',
				'997',
				'999',
			]
		],
		[
			'Казахстан',
			CountryISO.Kazakhstan,
			'7',
			1
		],
		[
			'Руанда',
			CountryISO.Rwanda,
			'250'
		],
		[
			'Сен-Бартелеми (Saint-Barthélemy)',
			CountryISO.SaintBarthélemy,
			'590',
			1
		],
		[
			'остров Святой Елены',
			CountryISO.SaintHelena,
			'290'
		],
		[
			'Сент-Китс и Невис',
			CountryISO.SaintKittsAndNevis,
			'1869'
		],
		[
			'Saint Lucia',
			'lc',
			'1',
			1,
			[
				'758',
			]
		],
		[
			'Сен-Мартен (Saint-Martin (partie française))',
			CountryISO.SaintMartin,
			'590',
			2
		],
		[
			'Сен-Пьер и Микелон (Saint-Pierre-et-Miquelon)',
			CountryISO.SaintPierreAndMiquelon,
			'508'
		],
		[
			'Сент-Винсент и Гренадины',
			'vc',
			'1',
			1,
			[
				'784',
			]
		],
		[
			'Самоа',
			CountryISO.Samoa,
			'685'
		],
		[
			'Сан-Марино',
			CountryISO.SanMarino,
			'378'
		],
		[
			'Сан-Томе и Принсипи (São Tomé e Príncipe)',
			CountryISO.SãoToméAndPríncipe,
			'239'
		],
		[
			'Саудовская Аравия (‫المملكة العربية السعودية‬‎)',
			CountryISO.SaudiArabia,
			'966'
		],
		[
			'Сенегал (Sénégal)',
			CountryISO.Senegal,
			'221'
		],
		[
			'Сербия (Србија)',
			CountryISO.Serbia,
			'381'
		],
		[
			'Сейшелы',
			CountryISO.Seychelles,
			'248'
		],
		[
			'Сьерра-Леоне',
			CountryISO.SierraLeone,
			'232'
		],
		[
			'Сингапур',
			CountryISO.Singapore,
			'65'
		],
		[
			'Синт-Мартен',
			'sx',
			'1',
			1,
			[
				'721',
			]
		],
		[
			'Словакия (Slovensko)',
			CountryISO.Slovakia,
			'421'
		],
		[
			'Словения (Slovenija)',
			CountryISO.Slovenia,
			'386'
		],
		[
			'Соломоновы острова',
			CountryISO.SolomonIslands,
			'677'
		],
		[
			'Сомали (Soomaaliya)',
			CountryISO.Somalia,
			'252'
		],
		[
			'Южная Африка',
			CountryISO.SouthAfrica,
			'27'
		],
		[
			'Южная Корея (대한민국)',
			CountryISO.SouthKorea,
			'82'
		],
		[
			'Южный Судан (‫جنوب السودان‬‎)',
			CountryISO.SouthSudan,
			'211'
		],
		[
			'Испания (España)',
			CountryISO.Spain,
			'34'
		],
		[
			'Шри-Ланка (ශ්‍රී ලංකාව)',
			CountryISO.SriLanka,
			'94'
		],
		[
			'Судан (‫السودان‬‎)',
			CountryISO.Sudan,
			'249'
		],
		[
			'Суринам',
			CountryISO.Suriname,
			'597'
		],
		[
			'Шпицберген и Ян-Майен',
			CountryISO.SvalbardAndJanMayen,
			'47',
			1
		],
		[
			'Эсватини',
			CountryISO.Swaziland,
			'268'
		],
		[
			'Швеция (Sverige)',
			CountryISO.Sweden,
			'46'
		],
		[
			'Швейцария (Schweiz)',
			CountryISO.Switzerland,
			'41'
		],
		[
			'Сирия (‫سوريا‬‎)',
			CountryISO.Syria,
			'963'
		],
		[
			'Тайвань (台灣)',
			CountryISO.Taiwan,
			'886'
		],
		[
			'Таджикистан',
			CountryISO.Tajikistan,
			'992'
		],
		[
			'Танзания',
			CountryISO.Tanzania,
			'255'
		],
		[
			'Тайланд (ไทย)',
			CountryISO.Thailand,
			'66'
		],
		[
			'Восточный Тимор',
			CountryISO.TimorLeste,
			'670'
		],
		[
			'Того',
			CountryISO.Togo,
			'228'
		],
		[
			'Токелау',
			CountryISO.Tokelau,
			'690'
		],
		[
			'Тонга',
			CountryISO.Tonga,
			'676'
		],
		[
			'Тринидад и Тобаго',
			'tt',
			'1',
			1,
			[
				'868',
			]
		],
		[
			'Тунис (‫تونس‬‎)',
			CountryISO.Tunisia,
			'216'
		],
		[
			'Турция (Türkiye)',
			CountryISO.Turkey,
			'90'
		],
		[
			'Туркменистан',
			CountryISO.Turkmenistan,
			'993'
		],
		[
			'Острова Теркс и Кайкос',
			CountryISO.TurksAndCaicosIslands,
			'1649'
		],
		[
			'Тувалу',
			CountryISO.Tuvalu,
			'688'
		],
		[
			'Американские Виргинские острова',
			'vi',
			'1',
			1,
			[
				'340',
			]
		],
		[
			'Уганда',
			CountryISO.Uganda,
			'256'
		],
		[
			'Украина (Україна)',
			CountryISO.Ukraine,
			'380'
		],
		[
			'Объединенные Арабские Эмираты (‫الإمارات العربية المتحدة‬‎)',
			CountryISO.UnitedArabEmirates,
			'971'
		],
		[
			'Великобритания',
			CountryISO.UnitedKingdom,
			'44',
			0
		],
		[
			'США',
			CountryISO.UnitedStates,
			'1',
			0
		],
		[
			'Uruguay',
			CountryISO.Uruguay,
			'598'
		],
		[
			'Узбекистан (Oʻzbekiston)',
			CountryISO.Uzbekistan,
			'998'
		],
		[
			'Вануату',
			CountryISO.Vanuatu,
			'678'
		],
		[
			'Ватикан (Città del Vaticano)',
			CountryISO.VaticanCity,
			'39',
			1
		],
		[
			'Венесуэла',
			CountryISO.Venezuela,
			'58'
		],
		[
			'Вьетнам (Việt Nam)',
			CountryISO.Vietnam,
			'84'
		],
		[
			'Уоллис и Футуна',
			CountryISO.WallisAndFutuna,
			'681'
		],
		[
			'Западная Сахара (‫الصحراء الغربية‬‎)',
			CountryISO.WesternSahara,
			'212',
			1
		],
		[
			'Йемен (‫اليمن‬‎)',
			CountryISO.Yemen,
			'967'
		],
		[
			'Замбия',
			CountryISO.Zambia,
			'260'
		],
		[
			'Зимбабве',
			CountryISO.Zimbabwe,
			'263'
		],
		[
			'Аландские острова',
			CountryISO.ÅlandIslands,
			'358',
			1
		]
	]
}
}
