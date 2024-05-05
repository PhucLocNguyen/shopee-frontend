import ao from "../assets/image/ao.jpg";
import nhan from "../assets/image/nhan.png";

function Box() {
    return (  
        <>
            {/* <img src={ao}/>
            <img src={nhan}/> */}

             {/* Box chứa tất cả */}
            <div class="flex justify-center items-center h-screen w-full">
                <div class="flex flex-col h-[290px] w-[190px] border-[1px] border-[#9c9c9c59]">

                    {/* box chứa ảnh */}
                    <div class="relative h-[190px]">
                        <span class="absolute bg-[#ffe97a] w-9 h-[18px] px-1 py-[2px] text-[#ec3814] z-10 text-xs text center right-0">-20%</span>
                        <img class="absolute" src={ao}/>
                        <img class="absolute top-[-7px]" src={nhan}/> 
                        <div class="absolute bottom-[-0.25rem] right-0 bg-[#00000042] px-[6px] py-[1px] rounded text-white text-xs">
                            Ad
                        </div>
                    </div>

                    {/* Box chứa nội dung */}
                    <div class="w-full p-2 text-base pb-1">
                        <div class="min-h-11 custom-text font-base">Áo siêu câp vip pro đại trà nhưng mà không hề phổ Biến XDXDXDXD</div>

                        {/* nhãn trong nội dung */}
                        <div class="flex mt-[2px]">
                            <div class="border-[1px] border-[#ec3814] bg-white text-[#ec3814] px-[1px] py-[2px] text-[10px] leading-[10px]">Rẻ Vô Địch</div>
                            <div class="bg-[#f69113] text-[10px] leading-[10px] px-[1px] py-[2px] text-white ml-1">Giảm <span class="underline">đ</span>1k</div>
                            
                            {/* <div className="_1PWkR nt-medium nt-foot _3nkRL" style="width: 100%; color: rgb(246, 145, 19);">
                                <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                    <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth="1" transform="" stroke="currentColor" fill="rgb(246, 145, 19)"></path>
                                </svg>
                                <div className="_1FKkT _3Ao0A" style="color: white; background-color: rgb(246, 145, 19);">Giảm ₫1k</div>
                                <svg className="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16">
                                    <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" strokeWidth="1" transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="rgb(246, 145, 19)"></path>
                                </svg>
                            </div> */}
                        </div>
                        {/* footer của box */}
                        <div class="flex place-content-between">
                            {/* Giá của sản phẩm */}
                            <div class="text-[#ec3814] pt-[2px] text-lg">
                                <span class="text-[10px] leading-[10px] underline">đ</span>2.000
                            </div>
                            {/* số lượng bán */}
                            <div class="text-[#adadad] text-sm pt-2">
                                Đã bán 19,9k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Box;