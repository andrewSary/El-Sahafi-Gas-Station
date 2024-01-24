import Button from "./button/button";
import Leter from "./liter/liter";
import Table from "./table/table";
import Type from "./type/type";

export default function Home(){
    return(
        <>
        <nav className="nav">
            <div className="container mx-auto ">
                <div className="flex items-center justify-between">

                <div className="logo bg-[#F98C07] text-white px-[40px]  py-[35px]  text-center ">

                <p className="font-[700] text-[25px]">محطة الصحفي</p>
                <p className="font-[700] text-[25px]">El sahafi Gas Station </p>
                </div>
                <div className="me-[70px]">
                    <h1 className="font-[700] text-[30px]">تقرير شامل </h1>
                </div>
                </div>
            </div>
        </nav>
        <section className="home1 mt-16">
            <div className="container mx-auto w-[1400px]">
            <p className="font-[700] text-[24px] text-end mb-7">بيانات اساسية </p>
            <ul className="text-end flex flex-row-reverse mt-[20px] gap-9">
                <li>    رقم الفرع <span className="me-10">000</span></li>
                <li> <span className="me-10">----</span>   مسلسل  الوردية </li>
                <li>  <span className="me-10">---</span>  فترة  االوردية</li>
                <li> <span className="me-10">--</span>   مسؤل الشيفت </li>
                <li>التاريخ</li>
                <li>1 نوفمبر 2023 - 30 نوفمبر 2023</li>
            </ul>
            <p className="font-[700] text-[24px] text-end mt-20">بيانات مالية  </p>
            <div className="boxs flex flex-row-reverse pt-9 justify-between">
                <div className="box text-end">
                    <p>المصروفات</p>
                    <div className="mt-10">

                    <Leter bgColor="#fc808091" p="12px" radius="12px" text="ريال" number="123456" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>
                <div className="box text-end">
                    <p>ضرائب الشراء</p>
                    <div className="mt-10">

                    <Leter text="ريال" number="123456" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>

                <div className="box text-end">
                    <p>المبيعات</p>
                    <div className="mt-10">

                <Leter bgColor="#9747ff42" p="12px" text="ريال" number="123456" radius="12px"/>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>

                <div className="box text-end">
                    <p>ضرائب البيع</p>
                    <div className="mt-10">

                    <Leter text="ريال" number="123456" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>

                <div className="box text-end">
                    <p>صافي الأرباح</p>
                    <div className="mt-10">

                    <Leter text="ريال" number="123456" />
                    </div>
                </div>

            </div>

            </div>
        </section>
        <section className="home2 text-end mt-40">
        <div className="container mx-auto w-[1400px]">
            <p className="font-[700] text-[30px]">تفاصيل المصروفات</p>
            <p className="font-[700] text-[20px] mt-9 before:absolute relative before:w-[4px] before:h-[4px] before:bg-black before:right-[-15px] before:top-[18px]   ">شراء المواد السولاري</p>
            <table className="w-[100%] text-center mt-[40px] ">
                <thead className="bg-[#F4F2F2] ">
                <tr>
                    <th> الفرق بالكمية</th>
                    <th>اجمالي التبخر</th>
                    <th>اجمالي الشراء</th>
                    <th>الفرق بالكمية</th>
                    <th className="py-[20px]">التبخر</th>
                    <th>الكمية الفعلية</th>
                    <th>سعر اللتر </th>
                    <th>---</th>
                </tr>
                </thead>
                <tbody className="mt-8">
                    <tr className="border-b-[2px] border-[#a0aaca80]">
                        <td><Leter number="123" text="ريال"  /></td>
                        <td><Leter number="123456" text="ريال"  /></td>
                        <td  className="py-7"><Leter number="123456" text="ريال" /></td>
                        <td ><Leter number="123" text="لتر"/></td>
                        <td>  <Leter number="123" text="لتر"/></td>
                        <td>  <Leter number="123456" text="لتر"/></td>
                        <td className="text-[18px] font-[700]">00 </td>
                        <td><Type Color="#30F738" input="بنزين ممتاز 91"/> </td>
                    </tr >
                    <tr className="border-b-[2px] border-[#a0aaca80]">
                        <td><Leter number="123" text="ريال"  /></td>
                        <td><Leter number="123456" text="ريال"  /></td>
                        <td  className="py-7"><Leter number="123456" text="ريال" /></td>
                        <td ><Leter number="123" text="لتر"/></td>
                        <td>  <Leter number="123" text="لتر"/></td>
                        <td>  <Leter number="123456" text="لتر"/></td>
                        <td className="text-[18px] font-[700]">00 </td>
                        <td><Type Color="#FE4444" input="بنزين ممتاز 95"/> </td>
                    </tr>
                    <tr className="border-b-[2px] border-[#a0aaca80]">
                        <td><Leter number="123" text="ريال"  /></td>
                        <td><Leter number="123456" text="ريال"  /></td>
                        <td  className="py-7"><Leter number="123456" text="ريال" /></td>
                        <td ><Leter number="123" text="لتر"/></td>
                        <td>  <Leter number="123" text="لتر"/></td>
                        <td>  <Leter number="123456" text="لتر"/></td>
                        <td className="text-[18px] font-[700]">00 </td>
                        <td><Type Color="#0551E3" input="  ديزل"/> </td>
                    </tr>
                    <tr className="border-b-[2px] border-[#a0aaca80]">
                        <td colSpan={2} ><div className="flex bg-[#F4F2F2] py-[18px] rounded-[12px] justify-center items-center gap-6"><Leter number="123456" text="ريال"   /><p>الإجمالي</p></div></td>
                        <td colSpan={2}><div className="flex py-7 gap-8 items-center justify-center"><Leter number="123456" text="لتر"/><p>مصروفات حكومية</p></div></td>
                        <td colSpan={2}><div className="flex py-7 gap-8 items-center justify-center"><Leter number="123456" text="لتر"/><p>مصروفات المحطة</p></div></td>
                        <td colSpan={2}  className="">مصروفات داخلية</td>
                        
                    </tr>
                </tbody>
            </table>
            <div className="buttom flex justify-center gap-5 ">
                
                <p className="font-[700] text-[26px]   "><Button text="قيمة ضريبة الشراء المطلوبة" bgColor="#DD6602"/></p>
                <p className="font-[700] text-[26px]  "><Button text="أجمالي المصروفات بالضريبة" bgColor="#13161D"/></p>
            </div>
                <p className="font-[700] text-[26px]  "><Button text="  صافي  المصروفات" bgColor="#13161D"/></p>

        </div>
        </section>
        <section className="home3 text-end mt-[50px]">
            <div className="container mx-auto w-[1400px]">
        <p className="font-[700] text-[30px]">تفاصيل المبيعات </p>
        <p className="font-[700] text-[20px] mt-9 before:absolute relative before:w-[4px] before:h-[4px] before:bg-black before:right-[-15px] before:top-[18px]   ">بيع المواد السولارية</p>
        <table className="w-[100%] text-center mt-[40px] ">
           <Table td4="اسم المادة" td3="سعر اللتر " td2="الكمية الفعلية" td1="اجمالي الشراء"/>
            <tbody className="mt-8">
                <tr className="border-b-[2px] border-[#a0aaca80]">
                    <td><Leter number="123" text="لتر"/></td>
                    <td className="py-7"><Leter number="123456" text="لتر"/></td>
                    <td>00</td>
                <td><Type Color="#30F738" input="بنزين ممتاز 91"/> </td>

                </tr>
                <tr className="border-b-[2px] border-[#a0aaca80]">
                    <td><Leter number="123" text="لتر"/></td>
                    <td className="py-7"><Leter number="123456" text="لتر"/></td>
                    <td>00</td>
                <td><Type Color="#FE4444" input="بنزين ممتاز 95"/> </td>

                </tr>
                <tr className="border-b-[2px] border-[#a0aaca80]">
                    <td><Leter number="123" text="لتر"/></td>
                    <td className="py-7"><Leter number="123456" text="لتر"/></td>
                    <td>00</td>
                <td><Type Color="#0551E3" input="  ديزل"/> </td>

                </tr>
            </tbody>
        </table>
        <div className="buttom flex justify-center gap-5 ">
                
                <p className="font-[700] text-[26px]   "><Button text="     قيمة ضريبة البيع المطلوبة" bgColor="#DD6602"/></p>
                <p className="font-[700] text-[26px]  "><Button text="  أجمالي المبيعات بالضريبة" bgColor="#13161D"/></p>
            </div>

            </div>
        </section>
        <section className="home4 text-end">
            <div className="container w-[1400px] mx-auto  ">
            <p className="font-[700] text-[20px] mt-9 before:absolute relative before:w-[4px] before:h-[4px] before:bg-black before:right-[-15px] before:top-[18px]   ">واردات سيارات المحطة  </p>
            <table className="w-[100%] text-center mt-[40px] ">
                <Table td4="اسم السيارة" td3="عدد المشاوير" td2="قيمة الايجار" td1="اجمالي المشاوير"/>
                <tbody>
                <tr className="border-b-[2px] border-[#a0aaca80]">
                    <td><Leter number="123456" text="ريال"/></td>
                    <td className="py-7"><Leter number="123456" text="ريال"/></td>
                    <td>00</td>
                <td><Type Color="#30F738" input="بنزين ممتاز 91"/> </td>

                </tr>
                <tr className="border-b-[2px] border-[#a0aaca80]">
                    <td><Leter number="123456" text="ريال"/></td>
                    <td className="py-7"><Leter number="123456" text="ريال"/></td>
                    <td>00</td>
                <td><Type Color="#FE4444" input="بنزين ممتاز 95"/> </td>

                </tr>
                <tr className="border-b-[2px] border-[#a0aaca80]">
                    <td><Leter number="123456" text="ريال"/></td>
                    <td className="py-7"><Leter number="123456" text="ريال"/></td>
                    <td>00</td>
                <td><Type Color="#0551E3" input="  ديزل"/> </td>

                </tr>
                <tr className="border-b-[2px] border-[#a0aaca80]">
                    <td><Leter number="123456"  text="ريال"/></td>
                    <td className="py-7"><div className=" bg-[#F4F2F2] py-2 px-2">

                        <Leter number="123456" text="ريال"/>
                    </div>
                        </td>
                    <td>--</td>
                <td><Type  input="  الاجمال"/> </td>

                </tr>
                </tbody>


            </table>
                <p className="font-[700]  text-[26px]  "><Button text="  صافي  المبيعات  " bgColor="#13161D"/></p>

                <p className="font-[700] text-[26px]  "><Button text="  صافي الارباح  " bgColor="#13161D"/></p>
            </div>
        </section>
        <section className="home5 text-end">
            <div className="container mx-auto w-[1400px]">
            <p className="font-[700] text-[20px] mt-9 before:absolute relative before:w-[4px] before:h-[4px] before:bg-black before:right-[-15px] before:top-[18px]   ">الضرائب    </p>
            <table className="w-[100%] text-center mt-[40px] ">
            <Table bgColor="#DD6602" color="white" td4="طرق الدفع" td3="الضرائب المطلوبة" td2="الضرائب الدفوعة" td1="المتبقي"/>
            <tbody>
                <tr className="border-b-[2px] border-[#a0aaca80]">
                <td><Leter number="123456" text="ريال"/></td>
                <td><Leter number="123456" text="ريال"/></td>
                    <td className="py-7"><Leter number="123456" text="ريال"/></td>
                <td><Leter  text="ضريبة الشراء"/></td>
                </tr>
                <tr>
                <td><Leter number="123456" text="ريال"/></td>
                <td><Leter number="123456" text="ريال"/></td>
                    <td className="py-7"><Leter number="123456" text="ريال"/></td>
                <td><Leter  text="ضريبة البيع"/></td>
                </tr>
                <tr className="bg-[#13161D] text-white">
                <td><Leter number="123456" text="ريال"/></td>
                <td><Leter number="123456" text="ريال"/></td>
                    <td className="py-7"><Leter number="123456" text="ريال"/></td>
                <td><Leter  text="الاجمالي "/></td>
                </tr>
            </tbody>
            
            
            </table>
            </div>
        </section>
        <section className="home4 text-end mb-20 ">
            <div className="container w-[1400px] mx-auto">
            <p className="font-[700] text-[20px] mt-9 before:absolute relative before:w-[4px] before:h-[4px] before:bg-black before:right-[-15px] before:top-[18px]   ">الفواتير والاوراق الرسمية    </p>
            <table className="w-[100%] text-center mt-[40px]">
                <Table bgColor="#CBFFEA" td1="الملف" td2="القسم" td3="الوردية" td4="م"/>
                <tbody>
                    <tr className="border-b-[2px] border-[#a0aaca80]">
                        <td className="py-7">عرض الملف</td>
                        <td className="py-7">عملاء المحطة </td>
                        <td className="py-7">الصباحية </td>
                        <td className="py-7">01 </td>
                    </tr>
                    <tr className="border-b-[2px] border-[#a0aaca80]">
                        <td className="py-7">عرض الملف</td>
                        <td className="py-7">شراء جديد  </td>
                        <td className="py-7">الصباحية </td>
                        <td className="py-7">02 </td>
                    </tr>
                    <tr className="border-b-[2px] border-[#a0aaca80]">
                        <td className="py-7">عرض الملف</td>
                        <td className="py-7">الموظفين  </td>
                        <td className="py-7">الصباحية </td>
                        <td className="py-7">03 </td>
                    </tr>
                </tbody>
            </table>
            <div className="bg-[#111] flex justify-center items-center text-[25px] gap-40 text-white">
                <td colSpan={2} className="py-5 ">3</td>
                <td colSpan={2}>الاجمالي</td>
            </div>


            </div>
        </section>
        </>
    )
}