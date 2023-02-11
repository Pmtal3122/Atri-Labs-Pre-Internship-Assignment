import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex2Cb, useTitlesCb, useHome_About_etcCb, useFlex4Cb, useFlex7Cb, useFlex6Cb, useThe_best_place_to_eat_burgersCb, useButtons_2Cb, useFlex10Cb, useOrange_backgroundCb, useOrder_from_favourite_appCb, useFour_ImagesCb, useFirst_Two_ImagesCb, useLast_two_imagesCb, useBrowse_our_menu1Cb, useMenu_ThumbnailsCb, useMenu_thumbnail_1Cb, useMenu_thumbnail_2Cb, useMenu_thumbnail_3Cb, useMenu_thumbnail_4Cb, useButtons_in_menu1Cb, useAbout_UsCb, useImage_and_AddressCb, useCome_and_visit_us_blockCb, useFlex28Cb, useFlex31Cb, useFlex32Cb, useAbout_Us_FlexCb, useAbout_Us_ButtonsCb, useBrowse_Our_Menu2Cb, useBOM2_Catalogue_ButtonsCb, useCatalogue_Row_1Cb, useCatalogue_Row_1_LeftCb, useCatalogue_Card_1Cb, usePrice_Flex_1Cb, useCatalogue_Card_2Cb, useFlex41Cb, useCatalogue_Row_1_RightCb, useFlex45Cb, useFlex43Cb, useFlex46Cb, useFlex44Cb, useCatalogue_Row_2Cb, useCatalogue_Row_2_RightCb, useFlex52Cb, useFlex48Cb, useFlex53Cb, useFlex49Cb, useCatalogue_Row_2_LeftCb, useFlex54Cb, useFlex50Cb, useFlex55Cb, useFlex51Cb, useBOM2_ButtonsCb, useMost_Delicious_BurgerCb, useMDB_LeftCb, useFlex62Cb, useMDB_RightCb, useWhat_Our_Clients_Say_FlexCb, useTestimony_FlexCb, useTestimony_Prev_FlexCb, useTestimony_Next_FlexCb, useTestimony_MainCb, useFlex73Cb, useProfile_FlexCb, useName_Place_FlexCb, useFlex77Cb, useOur_ArticlesCb, useOur_Articles_HeadlineCb, useFlex80Cb, useOA_All_CardsCb, useOA_Cards_LeftCb, useOA_Cards_RightCb, useOA_Cards_Right_Row1Cb, useOA_CardCb, useFlex86Cb, useFlex89Cb, useFlex87Cb, useFlex88Cb, useBook_Your_Table_NowCb, useBYTN_LeftCb, useFlex92Cb, useFlex95Cb, useFlex96Cb, useBYTN_RightCb, useBYTN_FormCb, useBYTN_Form_RowCb, useBYTN_Form_LabelAndInputCb, useFlex101Cb, useFlex104Cb, useFlex102Cb, useFlex103Cb, useFlex107Cb, useFlex105Cb, useFlex106Cb, useFlex110Cb, useFlex108Cb, useFollow_Us_On_Insta_FlexCb, useFUOI_Header_ButtonCb, useFlex113Cb, useFUOI_ImagesCb, useFUOI_Images_RightCb, useFUOI_Right_Row_1Cb, useFUOI_Right_Row2Cb, useFooter_FlexCb, useFooter_Flex_LeftCb, useFlex121Cb, useFooter_Flex_MidCb, useFooter_Mid_ListCb, useFlex124Cb, useFooter_Flex_RightCb, useFlex128Cb, useFlex126Cb, useFlex127Cb, useImage1Cb, useTextBox3Cb, useTextBox4Cb, useTextBox5Cb, useTextBox6Cb, useTextBox7Cb, useButton1Cb, useButton2Cb, useTextBox10Cb, useTextBox8Cb, useTextBox9Cb, useButton5Cb, useButton6Cb, useImage2Cb, useTextBox11Cb, useDoordarshCb, usePostmatesCb, useRappiCb, useGrubhubCb, useTextBox12Cb, useImage7Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useImage8Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useImage9Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useImage10Cb, useOrder_Online_ButtonCb, useButton9Cb, useAbout_Us_ImageCb, useTextBox25Cb, useLocation_IconCb, useTextBox26Cb, useTextBox27Cb, useImage14Cb, useTextBox28Cb, useImage15Cb, useAbout_UCb, useAbout_Us_Lorem1Cb, useAbout_Us_Lorem2Cb, useButton10Cb, useButton11Cb, useTextBox32Cb, useBOM2_LoremCb, useImage16Cb, useTextBox35Cb, useTextBox36Cb, usePrice_1Cb, useTextBox38Cb, useTextBox39Cb, useImage17Cb, useTextBox37Cb, useImage18Cb, useTextBox42Cb, useTextBox43Cb, useTextBox40Cb, useTextBox44Cb, useTextBox45Cb, useImage19Cb, useTextBox41Cb, useImage20Cb, useTextBox50Cb, useTextBox51Cb, useTextBox46Cb, useTextBox52Cb, useTextBox53Cb, useImage21Cb, useTextBox47Cb, useImage22Cb, useTextBox54Cb, useTextBox55Cb, useTextBox48Cb, useTextBox56Cb, useTextBox57Cb, useImage23Cb, useTextBox49Cb, useButton12Cb, useButton13Cb, useTextBox58Cb, useTextBox59Cb, useButton14Cb, useButton15Cb, useImage24Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useCarouseCb, useDiv5Cb, useDiv6Cb, useImage32Cb, useImage33Cb, useTextBox64Cb, useTextBox65Cb, useImage34Cb, useImage35Cb, useImage36Cb, useImage37Cb, useImage38Cb, useImage39Cb, useTextBox66Cb, useTextBox67Cb, useButton16Cb, useButton17Cb, useTextBox68Cb, useTextBox69Cb, useImage40Cb, useTextBox70Cb, useTextBox71Cb, useTextBox72Cb, useImage41Cb, useTextBox73Cb, useTextBox74Cb, useTextBox75Cb, useTextBox76Cb, useImage42Cb, useImage43Cb, useTextBox77Cb, useTextBox78Cb, useTextBox79Cb, useTextBox80Cb, useImage44Cb, useTextBox81Cb, useTextBox82Cb, useImage45Cb, useTextBox83Cb, useTextBox84Cb, useImage46Cb, useTextBox85Cb, useImage47Cb, useButton18Cb, useTextBox86Cb, useInput1Cb, useInput2Cb, useTextBox87Cb, useTextBox88Cb, useInput3Cb, useInput4Cb, useTextBox89Cb, useTextBox90Cb, useInput5Cb, useInput6Cb, useTextBox91Cb, useTextBox92Cb, useInput7Cb, useTextBox94Cb, useTextBox95Cb, useImage48Cb, useImage49Cb, useImage50Cb, useImage51Cb, useImage52Cb, useImage53Cb, useImage54Cb, useTextBox96Cb, useImage55Cb, useImage56Cb, useImage57Cb, useImage58Cb, useImage59Cb, useTextBox97Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useTextBox113Cb, useImage60Cb, useImage61Cb, useImage62Cb, useImage63Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const TitlesProps = useStore((state)=>state["Home"]["Titles"]);
const TitlesIoProps = useIoStore((state)=>state["Home"]["Titles"]);
const TitlesCb = useTitlesCb()
const Home_About_etcProps = useStore((state)=>state["Home"]["Home_About_etc"]);
const Home_About_etcIoProps = useIoStore((state)=>state["Home"]["Home_About_etc"]);
const Home_About_etcCb = useHome_About_etcCb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const The_best_place_to_eat_burgersProps = useStore((state)=>state["Home"]["The_best_place_to_eat_burgers"]);
const The_best_place_to_eat_burgersIoProps = useIoStore((state)=>state["Home"]["The_best_place_to_eat_burgers"]);
const The_best_place_to_eat_burgersCb = useThe_best_place_to_eat_burgersCb()
const Buttons_2Props = useStore((state)=>state["Home"]["Buttons_2"]);
const Buttons_2IoProps = useIoStore((state)=>state["Home"]["Buttons_2"]);
const Buttons_2Cb = useButtons_2Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Orange_backgroundProps = useStore((state)=>state["Home"]["Orange_background"]);
const Orange_backgroundIoProps = useIoStore((state)=>state["Home"]["Orange_background"]);
const Orange_backgroundCb = useOrange_backgroundCb()
const Order_from_favourite_appProps = useStore((state)=>state["Home"]["Order_from_favourite_app"]);
const Order_from_favourite_appIoProps = useIoStore((state)=>state["Home"]["Order_from_favourite_app"]);
const Order_from_favourite_appCb = useOrder_from_favourite_appCb()
const Four_ImagesProps = useStore((state)=>state["Home"]["Four_Images"]);
const Four_ImagesIoProps = useIoStore((state)=>state["Home"]["Four_Images"]);
const Four_ImagesCb = useFour_ImagesCb()
const First_Two_ImagesProps = useStore((state)=>state["Home"]["First_Two_Images"]);
const First_Two_ImagesIoProps = useIoStore((state)=>state["Home"]["First_Two_Images"]);
const First_Two_ImagesCb = useFirst_Two_ImagesCb()
const Last_two_imagesProps = useStore((state)=>state["Home"]["Last_two_images"]);
const Last_two_imagesIoProps = useIoStore((state)=>state["Home"]["Last_two_images"]);
const Last_two_imagesCb = useLast_two_imagesCb()
const Browse_our_menu1Props = useStore((state)=>state["Home"]["Browse_our_menu1"]);
const Browse_our_menu1IoProps = useIoStore((state)=>state["Home"]["Browse_our_menu1"]);
const Browse_our_menu1Cb = useBrowse_our_menu1Cb()
const Menu_ThumbnailsProps = useStore((state)=>state["Home"]["Menu_Thumbnails"]);
const Menu_ThumbnailsIoProps = useIoStore((state)=>state["Home"]["Menu_Thumbnails"]);
const Menu_ThumbnailsCb = useMenu_ThumbnailsCb()
const Menu_thumbnail_1Props = useStore((state)=>state["Home"]["Menu_thumbnail_1"]);
const Menu_thumbnail_1IoProps = useIoStore((state)=>state["Home"]["Menu_thumbnail_1"]);
const Menu_thumbnail_1Cb = useMenu_thumbnail_1Cb()
const Menu_thumbnail_2Props = useStore((state)=>state["Home"]["Menu_thumbnail_2"]);
const Menu_thumbnail_2IoProps = useIoStore((state)=>state["Home"]["Menu_thumbnail_2"]);
const Menu_thumbnail_2Cb = useMenu_thumbnail_2Cb()
const Menu_thumbnail_3Props = useStore((state)=>state["Home"]["Menu_thumbnail_3"]);
const Menu_thumbnail_3IoProps = useIoStore((state)=>state["Home"]["Menu_thumbnail_3"]);
const Menu_thumbnail_3Cb = useMenu_thumbnail_3Cb()
const Menu_thumbnail_4Props = useStore((state)=>state["Home"]["Menu_thumbnail_4"]);
const Menu_thumbnail_4IoProps = useIoStore((state)=>state["Home"]["Menu_thumbnail_4"]);
const Menu_thumbnail_4Cb = useMenu_thumbnail_4Cb()
const Buttons_in_menu1Props = useStore((state)=>state["Home"]["Buttons_in_menu1"]);
const Buttons_in_menu1IoProps = useIoStore((state)=>state["Home"]["Buttons_in_menu1"]);
const Buttons_in_menu1Cb = useButtons_in_menu1Cb()
const About_UsProps = useStore((state)=>state["Home"]["About_Us"]);
const About_UsIoProps = useIoStore((state)=>state["Home"]["About_Us"]);
const About_UsCb = useAbout_UsCb()
const Image_and_AddressProps = useStore((state)=>state["Home"]["Image_and_Address"]);
const Image_and_AddressIoProps = useIoStore((state)=>state["Home"]["Image_and_Address"]);
const Image_and_AddressCb = useImage_and_AddressCb()
const Come_and_visit_us_blockProps = useStore((state)=>state["Home"]["Come_and_visit_us_block"]);
const Come_and_visit_us_blockIoProps = useIoStore((state)=>state["Home"]["Come_and_visit_us_block"]);
const Come_and_visit_us_blockCb = useCome_and_visit_us_blockCb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const About_Us_FlexProps = useStore((state)=>state["Home"]["About_Us_Flex"]);
const About_Us_FlexIoProps = useIoStore((state)=>state["Home"]["About_Us_Flex"]);
const About_Us_FlexCb = useAbout_Us_FlexCb()
const About_Us_ButtonsProps = useStore((state)=>state["Home"]["About_Us_Buttons"]);
const About_Us_ButtonsIoProps = useIoStore((state)=>state["Home"]["About_Us_Buttons"]);
const About_Us_ButtonsCb = useAbout_Us_ButtonsCb()
const Browse_Our_Menu2Props = useStore((state)=>state["Home"]["Browse_Our_Menu2"]);
const Browse_Our_Menu2IoProps = useIoStore((state)=>state["Home"]["Browse_Our_Menu2"]);
const Browse_Our_Menu2Cb = useBrowse_Our_Menu2Cb()
const BOM2_Catalogue_ButtonsProps = useStore((state)=>state["Home"]["BOM2_Catalogue_Buttons"]);
const BOM2_Catalogue_ButtonsIoProps = useIoStore((state)=>state["Home"]["BOM2_Catalogue_Buttons"]);
const BOM2_Catalogue_ButtonsCb = useBOM2_Catalogue_ButtonsCb()
const Catalogue_Row_1Props = useStore((state)=>state["Home"]["Catalogue_Row_1"]);
const Catalogue_Row_1IoProps = useIoStore((state)=>state["Home"]["Catalogue_Row_1"]);
const Catalogue_Row_1Cb = useCatalogue_Row_1Cb()
const Catalogue_Row_1_LeftProps = useStore((state)=>state["Home"]["Catalogue_Row_1_Left"]);
const Catalogue_Row_1_LeftIoProps = useIoStore((state)=>state["Home"]["Catalogue_Row_1_Left"]);
const Catalogue_Row_1_LeftCb = useCatalogue_Row_1_LeftCb()
const Catalogue_Card_1Props = useStore((state)=>state["Home"]["Catalogue_Card_1"]);
const Catalogue_Card_1IoProps = useIoStore((state)=>state["Home"]["Catalogue_Card_1"]);
const Catalogue_Card_1Cb = useCatalogue_Card_1Cb()
const Price_Flex_1Props = useStore((state)=>state["Home"]["Price_Flex_1"]);
const Price_Flex_1IoProps = useIoStore((state)=>state["Home"]["Price_Flex_1"]);
const Price_Flex_1Cb = usePrice_Flex_1Cb()
const Catalogue_Card_2Props = useStore((state)=>state["Home"]["Catalogue_Card_2"]);
const Catalogue_Card_2IoProps = useIoStore((state)=>state["Home"]["Catalogue_Card_2"]);
const Catalogue_Card_2Cb = useCatalogue_Card_2Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Catalogue_Row_1_RightProps = useStore((state)=>state["Home"]["Catalogue_Row_1_Right"]);
const Catalogue_Row_1_RightIoProps = useIoStore((state)=>state["Home"]["Catalogue_Row_1_Right"]);
const Catalogue_Row_1_RightCb = useCatalogue_Row_1_RightCb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Catalogue_Row_2Props = useStore((state)=>state["Home"]["Catalogue_Row_2"]);
const Catalogue_Row_2IoProps = useIoStore((state)=>state["Home"]["Catalogue_Row_2"]);
const Catalogue_Row_2Cb = useCatalogue_Row_2Cb()
const Catalogue_Row_2_RightProps = useStore((state)=>state["Home"]["Catalogue_Row_2_Right"]);
const Catalogue_Row_2_RightIoProps = useIoStore((state)=>state["Home"]["Catalogue_Row_2_Right"]);
const Catalogue_Row_2_RightCb = useCatalogue_Row_2_RightCb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Catalogue_Row_2_LeftProps = useStore((state)=>state["Home"]["Catalogue_Row_2_Left"]);
const Catalogue_Row_2_LeftIoProps = useIoStore((state)=>state["Home"]["Catalogue_Row_2_Left"]);
const Catalogue_Row_2_LeftCb = useCatalogue_Row_2_LeftCb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const BOM2_ButtonsProps = useStore((state)=>state["Home"]["BOM2_Buttons"]);
const BOM2_ButtonsIoProps = useIoStore((state)=>state["Home"]["BOM2_Buttons"]);
const BOM2_ButtonsCb = useBOM2_ButtonsCb()
const Most_Delicious_BurgerProps = useStore((state)=>state["Home"]["Most_Delicious_Burger"]);
const Most_Delicious_BurgerIoProps = useIoStore((state)=>state["Home"]["Most_Delicious_Burger"]);
const Most_Delicious_BurgerCb = useMost_Delicious_BurgerCb()
const MDB_LeftProps = useStore((state)=>state["Home"]["MDB_Left"]);
const MDB_LeftIoProps = useIoStore((state)=>state["Home"]["MDB_Left"]);
const MDB_LeftCb = useMDB_LeftCb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const MDB_RightProps = useStore((state)=>state["Home"]["MDB_Right"]);
const MDB_RightIoProps = useIoStore((state)=>state["Home"]["MDB_Right"]);
const MDB_RightCb = useMDB_RightCb()
const What_Our_Clients_Say_FlexProps = useStore((state)=>state["Home"]["What_Our_Clients_Say_Flex"]);
const What_Our_Clients_Say_FlexIoProps = useIoStore((state)=>state["Home"]["What_Our_Clients_Say_Flex"]);
const What_Our_Clients_Say_FlexCb = useWhat_Our_Clients_Say_FlexCb()
const Testimony_FlexProps = useStore((state)=>state["Home"]["Testimony_Flex"]);
const Testimony_FlexIoProps = useIoStore((state)=>state["Home"]["Testimony_Flex"]);
const Testimony_FlexCb = useTestimony_FlexCb()
const Testimony_Prev_FlexProps = useStore((state)=>state["Home"]["Testimony_Prev_Flex"]);
const Testimony_Prev_FlexIoProps = useIoStore((state)=>state["Home"]["Testimony_Prev_Flex"]);
const Testimony_Prev_FlexCb = useTestimony_Prev_FlexCb()
const Testimony_Next_FlexProps = useStore((state)=>state["Home"]["Testimony_Next_Flex"]);
const Testimony_Next_FlexIoProps = useIoStore((state)=>state["Home"]["Testimony_Next_Flex"]);
const Testimony_Next_FlexCb = useTestimony_Next_FlexCb()
const Testimony_MainProps = useStore((state)=>state["Home"]["Testimony_Main"]);
const Testimony_MainIoProps = useIoStore((state)=>state["Home"]["Testimony_Main"]);
const Testimony_MainCb = useTestimony_MainCb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Profile_FlexProps = useStore((state)=>state["Home"]["Profile_Flex"]);
const Profile_FlexIoProps = useIoStore((state)=>state["Home"]["Profile_Flex"]);
const Profile_FlexCb = useProfile_FlexCb()
const Name_Place_FlexProps = useStore((state)=>state["Home"]["Name_Place_Flex"]);
const Name_Place_FlexIoProps = useIoStore((state)=>state["Home"]["Name_Place_Flex"]);
const Name_Place_FlexCb = useName_Place_FlexCb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Our_ArticlesProps = useStore((state)=>state["Home"]["Our_Articles"]);
const Our_ArticlesIoProps = useIoStore((state)=>state["Home"]["Our_Articles"]);
const Our_ArticlesCb = useOur_ArticlesCb()
const Our_Articles_HeadlineProps = useStore((state)=>state["Home"]["Our_Articles_Headline"]);
const Our_Articles_HeadlineIoProps = useIoStore((state)=>state["Home"]["Our_Articles_Headline"]);
const Our_Articles_HeadlineCb = useOur_Articles_HeadlineCb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const OA_All_CardsProps = useStore((state)=>state["Home"]["OA_All_Cards"]);
const OA_All_CardsIoProps = useIoStore((state)=>state["Home"]["OA_All_Cards"]);
const OA_All_CardsCb = useOA_All_CardsCb()
const OA_Cards_LeftProps = useStore((state)=>state["Home"]["OA_Cards_Left"]);
const OA_Cards_LeftIoProps = useIoStore((state)=>state["Home"]["OA_Cards_Left"]);
const OA_Cards_LeftCb = useOA_Cards_LeftCb()
const OA_Cards_RightProps = useStore((state)=>state["Home"]["OA_Cards_Right"]);
const OA_Cards_RightIoProps = useIoStore((state)=>state["Home"]["OA_Cards_Right"]);
const OA_Cards_RightCb = useOA_Cards_RightCb()
const OA_Cards_Right_Row1Props = useStore((state)=>state["Home"]["OA_Cards_Right_Row1"]);
const OA_Cards_Right_Row1IoProps = useIoStore((state)=>state["Home"]["OA_Cards_Right_Row1"]);
const OA_Cards_Right_Row1Cb = useOA_Cards_Right_Row1Cb()
const OA_CardProps = useStore((state)=>state["Home"]["OA_Card"]);
const OA_CardIoProps = useIoStore((state)=>state["Home"]["OA_Card"]);
const OA_CardCb = useOA_CardCb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Book_Your_Table_NowProps = useStore((state)=>state["Home"]["Book_Your_Table_Now"]);
const Book_Your_Table_NowIoProps = useIoStore((state)=>state["Home"]["Book_Your_Table_Now"]);
const Book_Your_Table_NowCb = useBook_Your_Table_NowCb()
const BYTN_LeftProps = useStore((state)=>state["Home"]["BYTN_Left"]);
const BYTN_LeftIoProps = useIoStore((state)=>state["Home"]["BYTN_Left"]);
const BYTN_LeftCb = useBYTN_LeftCb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const BYTN_RightProps = useStore((state)=>state["Home"]["BYTN_Right"]);
const BYTN_RightIoProps = useIoStore((state)=>state["Home"]["BYTN_Right"]);
const BYTN_RightCb = useBYTN_RightCb()
const BYTN_FormProps = useStore((state)=>state["Home"]["BYTN_Form"]);
const BYTN_FormIoProps = useIoStore((state)=>state["Home"]["BYTN_Form"]);
const BYTN_FormCb = useBYTN_FormCb()
const BYTN_Form_RowProps = useStore((state)=>state["Home"]["BYTN_Form_Row"]);
const BYTN_Form_RowIoProps = useIoStore((state)=>state["Home"]["BYTN_Form_Row"]);
const BYTN_Form_RowCb = useBYTN_Form_RowCb()
const BYTN_Form_LabelAndInputProps = useStore((state)=>state["Home"]["BYTN_Form_LabelAndInput"]);
const BYTN_Form_LabelAndInputIoProps = useIoStore((state)=>state["Home"]["BYTN_Form_LabelAndInput"]);
const BYTN_Form_LabelAndInputCb = useBYTN_Form_LabelAndInputCb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Follow_Us_On_Insta_FlexProps = useStore((state)=>state["Home"]["Follow_Us_On_Insta_Flex"]);
const Follow_Us_On_Insta_FlexIoProps = useIoStore((state)=>state["Home"]["Follow_Us_On_Insta_Flex"]);
const Follow_Us_On_Insta_FlexCb = useFollow_Us_On_Insta_FlexCb()
const FUOI_Header_ButtonProps = useStore((state)=>state["Home"]["FUOI_Header_Button"]);
const FUOI_Header_ButtonIoProps = useIoStore((state)=>state["Home"]["FUOI_Header_Button"]);
const FUOI_Header_ButtonCb = useFUOI_Header_ButtonCb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const FUOI_ImagesProps = useStore((state)=>state["Home"]["FUOI_Images"]);
const FUOI_ImagesIoProps = useIoStore((state)=>state["Home"]["FUOI_Images"]);
const FUOI_ImagesCb = useFUOI_ImagesCb()
const FUOI_Images_RightProps = useStore((state)=>state["Home"]["FUOI_Images_Right"]);
const FUOI_Images_RightIoProps = useIoStore((state)=>state["Home"]["FUOI_Images_Right"]);
const FUOI_Images_RightCb = useFUOI_Images_RightCb()
const FUOI_Right_Row_1Props = useStore((state)=>state["Home"]["FUOI_Right_Row_1"]);
const FUOI_Right_Row_1IoProps = useIoStore((state)=>state["Home"]["FUOI_Right_Row_1"]);
const FUOI_Right_Row_1Cb = useFUOI_Right_Row_1Cb()
const FUOI_Right_Row2Props = useStore((state)=>state["Home"]["FUOI_Right_Row2"]);
const FUOI_Right_Row2IoProps = useIoStore((state)=>state["Home"]["FUOI_Right_Row2"]);
const FUOI_Right_Row2Cb = useFUOI_Right_Row2Cb()
const Footer_FlexProps = useStore((state)=>state["Home"]["Footer_Flex"]);
const Footer_FlexIoProps = useIoStore((state)=>state["Home"]["Footer_Flex"]);
const Footer_FlexCb = useFooter_FlexCb()
const Footer_Flex_LeftProps = useStore((state)=>state["Home"]["Footer_Flex_Left"]);
const Footer_Flex_LeftIoProps = useIoStore((state)=>state["Home"]["Footer_Flex_Left"]);
const Footer_Flex_LeftCb = useFooter_Flex_LeftCb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Footer_Flex_MidProps = useStore((state)=>state["Home"]["Footer_Flex_Mid"]);
const Footer_Flex_MidIoProps = useIoStore((state)=>state["Home"]["Footer_Flex_Mid"]);
const Footer_Flex_MidCb = useFooter_Flex_MidCb()
const Footer_Mid_ListProps = useStore((state)=>state["Home"]["Footer_Mid_List"]);
const Footer_Mid_ListIoProps = useIoStore((state)=>state["Home"]["Footer_Mid_List"]);
const Footer_Mid_ListCb = useFooter_Mid_ListCb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Footer_Flex_RightProps = useStore((state)=>state["Home"]["Footer_Flex_Right"]);
const Footer_Flex_RightIoProps = useIoStore((state)=>state["Home"]["Footer_Flex_Right"]);
const Footer_Flex_RightCb = useFooter_Flex_RightCb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const DoordarshProps = useStore((state)=>state["Home"]["Doordarsh"]);
const DoordarshIoProps = useIoStore((state)=>state["Home"]["Doordarsh"]);
const DoordarshCb = useDoordarshCb()
const PostmatesProps = useStore((state)=>state["Home"]["Postmates"]);
const PostmatesIoProps = useIoStore((state)=>state["Home"]["Postmates"]);
const PostmatesCb = usePostmatesCb()
const RappiProps = useStore((state)=>state["Home"]["Rappi"]);
const RappiIoProps = useIoStore((state)=>state["Home"]["Rappi"]);
const RappiCb = useRappiCb()
const GrubhubProps = useStore((state)=>state["Home"]["Grubhub"]);
const GrubhubIoProps = useIoStore((state)=>state["Home"]["Grubhub"]);
const GrubhubCb = useGrubhubCb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Order_Online_ButtonProps = useStore((state)=>state["Home"]["Order_Online_Button"]);
const Order_Online_ButtonIoProps = useIoStore((state)=>state["Home"]["Order_Online_Button"]);
const Order_Online_ButtonCb = useOrder_Online_ButtonCb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const About_Us_ImageProps = useStore((state)=>state["Home"]["About_Us_Image"]);
const About_Us_ImageIoProps = useIoStore((state)=>state["Home"]["About_Us_Image"]);
const About_Us_ImageCb = useAbout_Us_ImageCb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Location_IconProps = useStore((state)=>state["Home"]["Location_Icon"]);
const Location_IconIoProps = useIoStore((state)=>state["Home"]["Location_Icon"]);
const Location_IconCb = useLocation_IconCb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const About_UProps = useStore((state)=>state["Home"]["About_U"]);
const About_UIoProps = useIoStore((state)=>state["Home"]["About_U"]);
const About_UCb = useAbout_UCb()
const About_Us_Lorem1Props = useStore((state)=>state["Home"]["About_Us_Lorem1"]);
const About_Us_Lorem1IoProps = useIoStore((state)=>state["Home"]["About_Us_Lorem1"]);
const About_Us_Lorem1Cb = useAbout_Us_Lorem1Cb()
const About_Us_Lorem2Props = useStore((state)=>state["Home"]["About_Us_Lorem2"]);
const About_Us_Lorem2IoProps = useIoStore((state)=>state["Home"]["About_Us_Lorem2"]);
const About_Us_Lorem2Cb = useAbout_Us_Lorem2Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const BOM2_LoremProps = useStore((state)=>state["Home"]["BOM2_Lorem"]);
const BOM2_LoremIoProps = useIoStore((state)=>state["Home"]["BOM2_Lorem"]);
const BOM2_LoremCb = useBOM2_LoremCb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Price_1Props = useStore((state)=>state["Home"]["Price_1"]);
const Price_1IoProps = useIoStore((state)=>state["Home"]["Price_1"]);
const Price_1Cb = usePrice_1Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const CarouseProps = useStore((state)=>state["Home"]["Carouse"]);
const CarouseIoProps = useIoStore((state)=>state["Home"]["Carouse"]);
const CarouseCb = useCarouseCb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Input5Props = useStore((state)=>state["Home"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Home"]["Input5"]);
const Input5Cb = useInput5Cb()
const Input6Props = useStore((state)=>state["Home"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Home"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Input7Props = useStore((state)=>state["Home"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["Home"]["Input7"]);
const Input7Cb = useInput7Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()

  return (<>
  <Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Flex className="p-Home Titles bpt" {...TitlesProps} {...TitlesCb} {...TitlesIoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<Flex className="p-Home Home_About_etc bpt" {...Home_About_etcProps} {...Home_About_etcCb} {...Home_About_etcIoProps}>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex className="p-Home The_best_place_to_eat_burgers bpt" {...The_best_place_to_eat_burgersProps} {...The_best_place_to_eat_burgersCb} {...The_best_place_to_eat_burgersIoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
</Flex>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Flex className="p-Home Buttons_2 bpt" {...Buttons_2Props} {...Buttons_2Cb} {...Buttons_2IoProps}>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Orange_background bpt" {...Orange_backgroundProps} {...Orange_backgroundCb} {...Orange_backgroundIoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Order_from_favourite_app bpt" {...Order_from_favourite_appProps} {...Order_from_favourite_appCb} {...Order_from_favourite_appIoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Flex className="p-Home Four_Images bpt" {...Four_ImagesProps} {...Four_ImagesCb} {...Four_ImagesIoProps}>
<Flex className="p-Home First_Two_Images bpt" {...First_Two_ImagesProps} {...First_Two_ImagesCb} {...First_Two_ImagesIoProps}>
<Image className="p-Home Doordarsh bpt" {...DoordarshProps} {...DoordarshCb} {...DoordarshIoProps}/>
<Image className="p-Home Postmates bpt" {...PostmatesProps} {...PostmatesCb} {...PostmatesIoProps}/>
</Flex>
<Flex className="p-Home Last_two_images bpt" {...Last_two_imagesProps} {...Last_two_imagesCb} {...Last_two_imagesIoProps}>
<Image className="p-Home Rappi bpt" {...RappiProps} {...RappiCb} {...RappiIoProps}/>
<Image className="p-Home Grubhub bpt" {...GrubhubProps} {...GrubhubCb} {...GrubhubIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Browse_our_menu1 bpt" {...Browse_our_menu1Props} {...Browse_our_menu1Cb} {...Browse_our_menu1IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Flex className="p-Home Menu_Thumbnails bpt" {...Menu_ThumbnailsProps} {...Menu_ThumbnailsCb} {...Menu_ThumbnailsIoProps}>
<Flex className="p-Home Menu_thumbnail_1 bpt" {...Menu_thumbnail_1Props} {...Menu_thumbnail_1Cb} {...Menu_thumbnail_1IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Flex className="p-Home Menu_thumbnail_2 bpt" {...Menu_thumbnail_2Props} {...Menu_thumbnail_2Cb} {...Menu_thumbnail_2IoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex className="p-Home Menu_thumbnail_3 bpt" {...Menu_thumbnail_3Props} {...Menu_thumbnail_3Cb} {...Menu_thumbnail_3IoProps}>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
<Flex className="p-Home Menu_thumbnail_4 bpt" {...Menu_thumbnail_4Props} {...Menu_thumbnail_4Cb} {...Menu_thumbnail_4IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Buttons_in_menu1 bpt" {...Buttons_in_menu1Props} {...Buttons_in_menu1Cb} {...Buttons_in_menu1IoProps}>
<Button className="p-Home Order_Online_Button bpt" {...Order_Online_ButtonProps} {...Order_Online_ButtonCb} {...Order_Online_ButtonIoProps}/>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home About_Us bpt" {...About_UsProps} {...About_UsCb} {...About_UsIoProps}>
<Flex className="p-Home Image_and_Address bpt" {...Image_and_AddressProps} {...Image_and_AddressCb} {...Image_and_AddressIoProps}>
<Image className="p-Home About_Us_Image bpt" {...About_Us_ImageProps} {...About_Us_ImageCb} {...About_Us_ImageIoProps}/>
<Flex className="p-Home Come_and_visit_us_block bpt" {...Come_and_visit_us_blockProps} {...Come_and_visit_us_blockCb} {...Come_and_visit_us_blockIoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Image className="p-Home Location_Icon bpt" {...Location_IconProps} {...Location_IconCb} {...Location_IconIoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home About_Us_Flex bpt" {...About_Us_FlexProps} {...About_Us_FlexCb} {...About_Us_FlexIoProps}>
<TextBox className="p-Home About_U bpt" {...About_UProps} {...About_UCb} {...About_UIoProps}/>
<TextBox className="p-Home About_Us_Lorem1 bpt" {...About_Us_Lorem1Props} {...About_Us_Lorem1Cb} {...About_Us_Lorem1IoProps}/>
<TextBox className="p-Home About_Us_Lorem2 bpt" {...About_Us_Lorem2Props} {...About_Us_Lorem2Cb} {...About_Us_Lorem2IoProps}/>
<Flex className="p-Home About_Us_Buttons bpt" {...About_Us_ButtonsProps} {...About_Us_ButtonsCb} {...About_Us_ButtonsIoProps}>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Browse_Our_Menu2 bpt" {...Browse_Our_Menu2Props} {...Browse_Our_Menu2Cb} {...Browse_Our_Menu2IoProps}>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home BOM2_Lorem bpt" {...BOM2_LoremProps} {...BOM2_LoremCb} {...BOM2_LoremIoProps}/>
<Flex className="p-Home BOM2_Catalogue_Buttons bpt" {...BOM2_Catalogue_ButtonsProps} {...BOM2_Catalogue_ButtonsCb} {...BOM2_Catalogue_ButtonsIoProps}>
<Flex className="p-Home Catalogue_Row_1 bpt" {...Catalogue_Row_1Props} {...Catalogue_Row_1Cb} {...Catalogue_Row_1IoProps}>
<Flex className="p-Home Catalogue_Row_1_Left bpt" {...Catalogue_Row_1_LeftProps} {...Catalogue_Row_1_LeftCb} {...Catalogue_Row_1_LeftIoProps}>
<Flex className="p-Home Catalogue_Card_1 bpt" {...Catalogue_Card_1Props} {...Catalogue_Card_1Cb} {...Catalogue_Card_1IoProps}>
<Flex className="p-Home Price_Flex_1 bpt" {...Price_Flex_1Props} {...Price_Flex_1Cb} {...Price_Flex_1IoProps}>
<TextBox className="p-Home Price_1 bpt" {...Price_1Props} {...Price_1Cb} {...Price_1IoProps}/>
</Flex>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
<Flex className="p-Home Catalogue_Card_2 bpt" {...Catalogue_Card_2Props} {...Catalogue_Card_2Cb} {...Catalogue_Card_2IoProps}>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Flex>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Catalogue_Row_1_Right bpt" {...Catalogue_Row_1_RightProps} {...Catalogue_Row_1_RightCb} {...Catalogue_Row_1_RightIoProps}>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Catalogue_Row_2 bpt" {...Catalogue_Row_2Props} {...Catalogue_Row_2Cb} {...Catalogue_Row_2IoProps}>
<Flex className="p-Home Catalogue_Row_2_Left bpt" {...Catalogue_Row_2_LeftProps} {...Catalogue_Row_2_LeftCb} {...Catalogue_Row_2_LeftIoProps}>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Catalogue_Row_2_Right bpt" {...Catalogue_Row_2_RightProps} {...Catalogue_Row_2_RightCb} {...Catalogue_Row_2_RightIoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Flex>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home BOM2_Buttons bpt" {...BOM2_ButtonsProps} {...BOM2_ButtonsCb} {...BOM2_ButtonsIoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Most_Delicious_Burger bpt" {...Most_Delicious_BurgerProps} {...Most_Delicious_BurgerCb} {...Most_Delicious_BurgerIoProps}>
<Flex className="p-Home MDB_Left bpt" {...MDB_LeftProps} {...MDB_LeftCb} {...MDB_LeftIoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home MDB_Right bpt" {...MDB_RightProps} {...MDB_RightCb} {...MDB_RightIoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home What_Our_Clients_Say_Flex bpt" {...What_Our_Clients_Say_FlexProps} {...What_Our_Clients_Say_FlexCb} {...What_Our_Clients_Say_FlexIoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<Flex className="p-Home Testimony_Flex bpt" {...Testimony_FlexProps} {...Testimony_FlexCb} {...Testimony_FlexIoProps}>
<Flex className="p-Home Testimony_Prev_Flex bpt" {...Testimony_Prev_FlexProps} {...Testimony_Prev_FlexCb} {...Testimony_Prev_FlexIoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Flex>
<Flex className="p-Home Testimony_Main bpt" {...Testimony_MainProps} {...Testimony_MainCb} {...Testimony_MainIoProps}>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Flex className="p-Home Profile_Flex bpt" {...Profile_FlexProps} {...Profile_FlexCb} {...Profile_FlexIoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Flex className="p-Home Name_Place_Flex bpt" {...Name_Place_FlexProps} {...Name_Place_FlexCb} {...Name_Place_FlexIoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Testimony_Next_Flex bpt" {...Testimony_Next_FlexProps} {...Testimony_Next_FlexCb} {...Testimony_Next_FlexIoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Carouse bpt" {...CarouseProps} {...CarouseCb} {...CarouseIoProps}/>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}/>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}/>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Our_Articles bpt" {...Our_ArticlesProps} {...Our_ArticlesCb} {...Our_ArticlesIoProps}>
<Flex className="p-Home Our_Articles_Headline bpt" {...Our_Articles_HeadlineProps} {...Our_Articles_HeadlineCb} {...Our_Articles_HeadlineIoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home OA_All_Cards bpt" {...OA_All_CardsProps} {...OA_All_CardsCb} {...OA_All_CardsIoProps}>
<Flex className="p-Home OA_Cards_Left bpt" {...OA_Cards_LeftProps} {...OA_Cards_LeftCb} {...OA_Cards_LeftIoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
<Flex className="p-Home OA_Cards_Right bpt" {...OA_Cards_RightProps} {...OA_Cards_RightCb} {...OA_Cards_RightIoProps}>
<Flex className="p-Home OA_Cards_Right_Row1 bpt" {...OA_Cards_Right_Row1Props} {...OA_Cards_Right_Row1Cb} {...OA_Cards_Right_Row1IoProps}>
<Flex className="p-Home OA_Card bpt" {...OA_CardProps} {...OA_CardCb} {...OA_CardIoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Book_Your_Table_Now bpt" {...Book_Your_Table_NowProps} {...Book_Your_Table_NowCb} {...Book_Your_Table_NowIoProps}>
<Flex className="p-Home BYTN_Left bpt" {...BYTN_LeftProps} {...BYTN_LeftCb} {...BYTN_LeftIoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home BYTN_Right bpt" {...BYTN_RightProps} {...BYTN_RightCb} {...BYTN_RightIoProps}>
<Flex className="p-Home BYTN_Form bpt" {...BYTN_FormProps} {...BYTN_FormCb} {...BYTN_FormIoProps}>
<Flex className="p-Home BYTN_Form_Row bpt" {...BYTN_Form_RowProps} {...BYTN_Form_RowCb} {...BYTN_Form_RowIoProps}>
<Flex className="p-Home BYTN_Form_LabelAndInput bpt" {...BYTN_Form_LabelAndInputProps} {...BYTN_Form_LabelAndInputCb} {...BYTN_Form_LabelAndInputIoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<Input className="p-Home Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<Input className="p-Home Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<Input className="p-Home Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<Input className="p-Home Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<Input className="p-Home Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex>
</Flex>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Follow_Us_On_Insta_Flex bpt" {...Follow_Us_On_Insta_FlexProps} {...Follow_Us_On_Insta_FlexCb} {...Follow_Us_On_Insta_FlexIoProps}>
<Flex className="p-Home FUOI_Header_Button bpt" {...FUOI_Header_ButtonProps} {...FUOI_Header_ButtonCb} {...FUOI_Header_ButtonIoProps}>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FUOI_Images bpt" {...FUOI_ImagesProps} {...FUOI_ImagesCb} {...FUOI_ImagesIoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
<Flex className="p-Home FUOI_Images_Right bpt" {...FUOI_Images_RightProps} {...FUOI_Images_RightCb} {...FUOI_Images_RightIoProps}>
<Flex className="p-Home FUOI_Right_Row_1 bpt" {...FUOI_Right_Row_1Props} {...FUOI_Right_Row_1Cb} {...FUOI_Right_Row_1IoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex>
<Flex className="p-Home FUOI_Right_Row2 bpt" {...FUOI_Right_Row2Props} {...FUOI_Right_Row2Cb} {...FUOI_Right_Row2IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Footer_Flex bpt" {...Footer_FlexProps} {...Footer_FlexCb} {...Footer_FlexIoProps}>
<Flex className="p-Home Footer_Flex_Left bpt" {...Footer_Flex_LeftProps} {...Footer_Flex_LeftCb} {...Footer_Flex_LeftIoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Footer_Flex_Mid bpt" {...Footer_Flex_MidProps} {...Footer_Flex_MidCb} {...Footer_Flex_MidIoProps}>
<Flex className="p-Home Footer_Mid_List bpt" {...Footer_Mid_ListProps} {...Footer_Mid_ListCb} {...Footer_Mid_ListIoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Footer_Flex_Right bpt" {...Footer_Flex_RightProps} {...Footer_Flex_RightCb} {...Footer_Flex_RightIoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
