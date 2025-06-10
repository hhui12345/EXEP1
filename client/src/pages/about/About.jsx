import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="mx-24 mt-5">
      <h1 className="text-center text-green-800 text-5xl font-bold">
        LiteMate
      </h1>

      <div className="mt-32 flex">
        {/* Side bar */}
        <div className="w-1/4 translate-x-5">
          <p> Giới thiệu </p>
          <p> Sứ mệnh </p>
        </div>

        {/* Main content */}

        <div className="w-3/4 -translate-x-20">
          <h1 className="text-6xl">VỀ CHÚNG TÔI</h1>

          <p className="mt-5">
            Dear Fabric! là một nỗ lực sáng tạo ra đời từ niềm đam mê về sự bền
            vững và biểu đạt nghệ thuật. Chúng tôi biến những mảnh vải tái chế
            thành những bức tranh ghép vải đầy màu sắc và độc đáo, thổi hồn mới
            vào những vật liệu có thể bị bỏ đi. Mỗi tác phẩm kể một câu chuyện,
            đan xen các kết cấu, màu sắc và hoa văn để tạo ra nghệ thuật ý
            nghĩa, vừa tôn vinh sự sáng tạo vừa nâng cao ý thức bảo vệ môi
            trường. Sứ mệnh của chúng tôi là truyền cảm hứng và thúc đẩy các
            thực hành nghệ thuật bền vững, đồng thời thể hiện vẻ đẹp của những
            vật liệu được tái sử dụng. Tại DearFab, chúng tôi tin rằng mỗi mảnh
            vải vụn đều có tiềm năng trở thành điều gì đó phi thường. Qua công
            việc của mình, chúng tôi mong muốn khơi dậy niềm vui, khuyến khích
            sự tỉnh thức và góp phần vào một hành tinh xanh hơn. Hãy tham gia
            cùng chúng tôi trong việc tôn vinh nghệ thuật của những cơ hội thứ
            hai, nơi sự sáng tạo gặp gỡ sự bền vững! Cùng nhau, chúng ta có thể
            tạo ra những tác phẩm nghệ thuật có ý nghĩa và góp phần bảo vệ môi
            trường.
          </p>
        </div>
      </div>

      {/* Tính năng */}

      <div className="flex mt-10 gap-x-9">
        <div className="w-1/2 border rounded-lg overflow-hidden">
          <img
            src="https://www.sunbrella.com/media/wysiwyg/all-fabrics-sunbrella-upholstery-hero.jpg"
            alt="ảnh"
            className="w-full object-cover h-60"
          />
        </div>

        <div className="w-1/2 bg-green-100 h-44 border border-gray-100 rounded-xl">
          <div className="p-5">
            <p>
              Tại DearFab, chúng tôi biến những mảnh vải tái chế thành những tác
              phẩm nghệ thuật ghép vải tuyệt đẹp, đảm bảo mỗi mảnh đều kể một
              câu chuyện về sự tái sinh và sáng tạo.
            </p>

            <Link
              to="#"
              className="inline-block text-center bg-white px-3 py-1 w-[150px] mt-2 border rounded-lg hover:bg-green-600"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-green-300 p-8 text-center mt-8 border-gray-100 rounded-lg ">
        Chúng tôi biến những mảnh vải tái chế thành những bức tranh ghép vải đầy
        màu sắc và độc đáo.
      </div>

      <h1 className="text-3xl font-semibold mt-8">Cách tiếp cận chúng tôi</h1>

      <div className="bg-gray-300 p-5 text-center mt-7 border-gray-100 rounded-lg ">
        Chúng tôi tạo ra nghệ thuật bền vững thông qua sự sáng tạo, tính bền
        vững và kỹ thuật thủ công, biến những vật liệu bị bỏ đi thành những tác
        phẩm có ý nghĩa.
      </div>

      <div className='mt-10 border overflow-hidden rounded-lg'>
        <img src="https://cdn.pixabay.com/photo/2019/02/26/19/03/flat-lay-4022714_1280.jpg" className='w-full h-96 object-cover' />
      </div>

      <div className='mt-10 text-center'>
          Liên hệ để khám phá các tác phẩm nghệ thuật bền vững của chúng tôi. Chúng tôi ở đây để truyền cảm hứng sáng tạo!


      </div>

    </div>
  );
}

export default About;
123123;
