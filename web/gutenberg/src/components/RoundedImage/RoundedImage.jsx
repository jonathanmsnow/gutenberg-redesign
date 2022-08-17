const RoundedImage = ({src, width}) => {
    return(
    <div class="flex flex-wrap justify-center">
        <div class={`w-${width} px-4`}>
            <img src={src} alt="..." class="shadow rounded-full" />
        </div>
    </div>
    )

}

export default RoundedImage;