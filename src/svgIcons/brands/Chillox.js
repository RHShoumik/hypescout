import PropTypes from "prop-types";

export const Chillox = (props) => {

    const { width = "131px", height = "40px" } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 131 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13386_13561)">
                <path d="M40.8884 16.8021C40.5594 16.1507 40.3854 15.6574 40.0904 15.247C39.1411 13.9253 38.9066 12.63 39.769 11.1277C40.4572 9.93027 41.2931 9.01152 42.5449 8.3714C44.1069 7.57314 45.684 6.94433 47.4653 7.01963C49.7761 7.11753 51.4288 8.25844 52.5067 10.2691C52.6164 10.4763 52.7942 10.6758 52.8168 10.8904C52.8773 11.4854 52.7942 12.0652 53.1686 12.6413C53.3312 12.8936 53.0816 13.4396 52.9681 13.835C52.6618 14.9081 52.6996 15.0286 53.8872 15.7854C53.9288 14.9872 53.9666 14.2793 54.0044 13.5639C54.4016 12.9237 54.8705 12.3025 55.1882 11.6172C56.0278 9.80977 57.7675 9.26757 59.4013 8.61992C59.8173 8.45424 60.4073 8.73665 61.0389 8.83078C61.7764 7.83672 62.4761 6.60167 63.8414 6.0331C65.3126 5.41935 66.9124 5.2612 68.4138 4.7604C69.0983 5.53607 70.2519 4.73781 71.0083 5.59632C72.1807 4.49306 73.7729 4.41776 75.2366 4.06004C75.9286 3.8906 76.8363 4.10146 77.5057 4.42152C78.5156 4.90725 79.6501 5.39675 80.2704 6.35316C80.8301 7.2192 81.371 8.17561 81.2197 9.35417C81.0986 10.2729 81.197 11.2218 81.197 12.3213C82.063 12.1518 82.9291 12.615 83.678 11.9184C85.5122 11.828 87.2859 12.0276 88.9424 12.9652C90.2208 11.9636 91.673 11.2444 93.3863 11.1728C93.6927 11.1616 94.0709 11.1013 94.294 11.2482C95.4475 12.0163 96.3439 11.3573 97.3764 10.7888C98.5261 10.7888 99.7893 10.7888 100.81 10.7888C102.501 11.6285 103.299 12.8861 103.953 14.4487C104.713 16.2674 103.462 17.461 103.072 19.0538C103.56 19.5659 103.844 20.2587 104.12 20.9742C104.642 22.3184 104.195 23.6325 103.431 24.4947C102.198 25.8842 101.102 27.5635 99.1274 28.1472C98.458 28.3467 97.8226 28.7722 97.1532 28.8212C96.4611 28.8701 95.716 29.1035 95.0012 28.5614C94.6798 28.3166 93.912 28.3015 93.5527 28.52C91.9681 29.4952 90.2435 29.1751 88.6928 29.2391C88.2163 28.9869 87.8533 28.7948 87.4448 28.5765C87.4146 28.5915 87.3275 28.6329 87.2406 28.6743C85.0584 29.6609 82.8648 30.606 80.3838 30.3612C79.6728 30.2896 78.9467 30.2031 78.2773 29.9696C77.5095 29.7023 76.8515 29.8642 76.2274 30.237C74.6314 31.1933 72.8728 31.1896 71.1142 31.103C70.7284 31.0842 70.3502 30.8319 69.885 30.6549C68.2966 31.8147 66.4585 31.9013 64.5562 31.9276C63.7658 31.9389 63.1228 31.0541 62.3173 31.649C61.6629 32.1309 60.8952 32.1686 60.1388 32.338C58.5882 32.6882 58.2894 32.7221 56.4362 32.2966C55.9975 32.1949 55.5323 32.2213 55.0218 32.451C53.7435 33.0309 51.463 33.558 50.4947 33.366C49.6362 33.1965 48.7928 32.9405 47.7452 32.6693C47.0607 33.3584 46.0358 33.7425 44.8482 33.7726C44.3943 33.784 43.9481 34.0287 43.4904 34.1228C43.029 34.2207 42.5033 33.9345 42.0873 34.4203C41.9739 34.552 41.5313 34.5973 41.3915 34.488C40.2568 33.6069 39.2167 34.4316 38.1465 34.6236C37.9233 34.6651 37.7191 34.8609 37.4997 34.8721C36.7736 34.9023 36.0891 35.0341 35.3743 35.2072C34.2661 35.4747 33.1126 34.9813 32.0385 34.6651C31.1082 34.3902 30.2421 33.8028 29.429 33.2342C27.5682 31.9276 26.2786 28.6291 26.7173 26.4904C27.4548 25.7976 26.8572 24.7508 27.451 23.96C28.2603 22.8832 28.7444 21.5427 29.6408 20.5599C31.093 18.9672 32.9765 17.928 35.0225 17.1824C36.3387 16.7042 37.685 16.8398 39.0277 16.8172C39.5912 16.7945 40.1434 16.8021 40.8884 16.8021ZM53.1875 26.3436C53.2177 25.903 53.1421 25.3194 53.3199 24.8186C53.6149 23.9789 54.0498 23.192 53.9628 22.2619C54.8592 21.0946 54.1103 20.27 53.3275 19.3362C52.0983 19.4755 50.8314 19.6186 49.6853 19.7467C49.0878 20.3416 48.5999 20.8272 48.1649 21.2603C47.8095 21.2603 47.5144 21.2603 47.2497 21.2603C47.9608 19.1818 48.5129 17.1146 49.0916 15.0512C49.4357 13.8312 49.5984 12.7468 48.9932 11.6962C46.8943 10.3746 45.2037 11.6887 43.411 12.4267C43.411 12.7129 43.411 13.0066 43.411 13.2514C43.9481 13.4546 44.4359 13.6391 44.8255 13.7861C45.1318 16.3013 44.3603 18.4513 43.7854 20.6541C43.4034 22.1264 42.8513 23.5496 42.5714 25.0633C42.4315 25.8202 42.1289 26.6109 41.4557 27.2473C40.6086 28.053 39.6706 28.663 38.6003 29.1751C37.9877 29.1751 37.3106 29.1751 36.698 29.1751C36.2404 28.7195 35.8395 28.3204 35.431 27.9137C35.431 27.1682 35.3705 26.4113 35.4499 25.6658C35.5218 24.973 35.7449 24.2952 35.8319 23.9224C36.5505 23.1543 37.0648 22.6083 37.6775 21.9531C38.0595 22.1413 38.4679 22.3409 38.918 22.5594C38.5965 22.8795 38.3696 23.1015 38.1502 23.3275C38.1125 23.3651 38.1011 23.433 38.0784 23.4856C38.3355 24.6717 38.3355 24.6717 39.6631 24.6792C40.2076 24.1973 40.6767 23.7831 41.0813 23.4291C41.0813 22.838 41.0813 22.3409 41.0813 21.9833C40.722 21.5653 40.4346 21.2377 40.185 20.9477C39.5458 20.9477 38.9747 20.9628 38.4112 20.944C36.6715 20.8837 35.1663 21.3093 33.6951 22.3786C32.708 23.0978 32.1369 23.8923 31.5885 24.9051C30.9796 26.0348 30.6732 27.2171 30.9493 28.3731C31.1838 29.3559 31.2746 30.5344 32.8895 30.8017C34.807 31.1218 36.8077 31.1707 38.5398 30.5006C39.5685 30.1051 40.3098 29.3295 41.3687 28.6517C41.4444 29.3408 41.5011 29.8529 41.5503 30.2896C42.7227 30.2896 43.7778 30.2896 44.8709 30.2896C45.0146 29.9885 45.1886 29.7399 45.2566 29.4613C45.6954 27.7669 46.2815 26.1177 46.7656 24.4383C47.1098 23.2409 48.044 22.5443 48.842 21.7197C48.876 21.6858 48.9592 21.7008 49.2353 21.6708C49.4357 21.7648 49.8064 21.9419 50.2224 22.1376C50.0711 24.4119 48.6529 26.3962 49.1142 28.7082C49.3828 28.9793 49.6891 29.2956 49.9917 29.6044C50.8843 29.6044 51.7655 29.6044 52.6467 29.6044C53.1837 29.2278 53.7056 28.8287 54.2616 28.486C54.7986 28.1547 55.3697 27.8761 55.7933 27.6464C56.4022 27.861 56.1904 28.3694 56.7879 28.5539C58.1532 28.9755 59.6661 28.8776 61.0578 28.0605C61.7462 27.6577 62.2416 26.7728 63.1115 26.9535C63.4064 27.2624 63.588 27.5635 63.8527 27.7142C64.8625 28.2865 65.9101 28.3543 66.9577 27.7857C67.9335 27.2585 68.913 26.7352 69.9795 26.1628C70.3918 26.5733 70.8229 27.0025 71.1747 27.3527C71.9462 27.3527 72.5853 27.4092 73.2056 27.3376C73.7881 27.2699 74.3553 27.0703 75.0171 26.9083C75.7093 26.3774 76.216 25.4662 77.1048 25.0256C79.2379 27.0552 81.3331 27.2811 83.9276 25.9858C85.1945 25.3532 86.1286 24.4571 86.8738 23.2974C87.6339 22.115 88.1671 20.8875 88.0122 19.4341C87.9516 18.8768 88.0007 18.3082 88.0007 17.7547C87.7247 17.4799 87.4449 17.2238 87.1914 16.9452C86.9002 16.6213 86.6317 16.2787 86.4615 16.0753C83.9579 15.9285 82.6228 16.0867 81.787 16.4293C80.2666 17.0544 79.1282 18.1651 78.1071 19.3626C77.0368 20.6202 76.9195 22.2054 77.0443 23.7455C76.7002 24.0994 76.3938 24.4157 76.1026 24.7169C75.7018 24.7169 75.3273 24.7169 74.9529 24.7169C74.7714 24.5361 74.5936 24.3592 74.3894 24.1559C74.3894 23.5572 74.3402 22.9284 74.4045 22.3109C74.465 21.7272 74.6201 21.1548 74.7714 20.5825C75.2063 18.9445 75.6639 17.3104 76.0988 15.6725C76.6435 13.6203 77.5473 11.6435 77.4074 9.4596C76.3106 8.40906 75.6034 7.93085 74.9189 8.17937C73.5346 8.68016 71.8403 8.69147 71.1407 10.1449C71.7647 10.529 72.3622 10.8942 72.9371 11.2482C72.6724 12.5209 72.956 13.643 72.5702 14.8328C72.0521 16.4368 71.9878 18.1877 70.9894 19.6487C70.9327 19.7353 70.9704 19.8972 70.9818 20.0215C71.0536 20.7332 70.6414 21.2528 70.3162 21.8176C69.9834 22.3974 70.2935 23.0715 69.9834 23.753C69.6732 24.427 69.4614 25.0633 68.8639 25.4437C68.4441 25.4437 68.0734 25.4437 67.7217 25.4437C67.4229 24.7621 66.8821 24.0467 67.283 23.4028C67.5893 22.9095 67.5024 22.4765 67.5931 22.0133C67.6839 21.5578 67.9033 21.1173 67.9524 20.6616C68.0886 19.3023 68.5386 18.0334 68.9584 16.7456C69.6581 14.5956 70.5015 12.4568 70.233 10.1185C70.2178 10.0018 70.1838 9.88885 70.233 10.1148C69.7904 9.52738 69.5295 9.18096 69.4198 9.03034C67.5893 8.5898 66.2429 9.24497 64.9419 10.0432C64.6167 10.2428 64.3595 10.5478 64.0002 10.8678C65.358 11.331 65.358 11.331 65.9933 12.566C65.8761 13.1535 65.6984 13.6128 65.7097 14.0684C65.7588 16.1393 64.9344 17.9995 64.2839 19.8859C63.7052 21.5578 63.2854 23.256 63.0169 24.6454C62.4005 25.293 61.9769 25.7411 61.4625 26.2871C61.1713 26.1552 60.8006 25.9896 60.517 25.8616C60.0821 23.7605 60.7024 21.9042 61.2016 20.0554C61.3226 19.6073 61.6781 19.2458 61.3869 18.6885C59.9081 18.73 58.3537 18.4363 56.9771 19.6186C57.3893 21.9154 55.8803 23.9036 55.7933 26.2757C55.1466 26.5582 54.5037 26.8331 53.8872 27.1042C53.6073 26.7992 53.4371 26.6147 53.1875 26.3436ZM93.6133 15.2959C92.9779 15.2959 92.4749 15.2959 91.9227 15.2959C91.3705 16.3051 89.8199 16.6514 89.8804 18.1388C91.658 19.0689 92.161 19.9198 92.1382 21.9079C91.9605 22.0849 91.7828 22.2619 91.5408 22.5029C90.8032 22.5029 90.0015 22.5029 89.2488 22.5029C88.413 23.433 88.0915 24.3516 88.9084 25.4286C89.6838 25.4286 90.4817 25.4286 91.1398 25.4286C92.1912 24.8676 92.2177 23.5195 93.2691 23.2108C93.9574 23.8998 94.6155 24.555 95.1866 25.1236C97.3688 25.0068 98.8778 24.2011 99.7136 22.356C99.7401 22.2995 99.5926 22.1678 99.5283 22.0699C99.0329 22.2204 98.5337 22.3711 98.1781 22.4765C97.592 21.9456 97.1305 21.5314 96.7183 21.1548C96.7183 20.7067 96.7183 20.334 96.7183 19.9801C99.4791 17.3669 99.9822 16.8398 99.6682 14.9947C99.517 14.9683 99.3165 14.9834 99.1766 14.9043C98.9799 14.7914 98.8286 14.6031 98.6849 14.4751C97.2667 15.2582 97.1456 15.2282 96.8582 16.5046C96.6804 17.2991 96.2833 17.8 95.6707 18.3685C94.9634 17.3179 94.2675 16.2787 93.6133 15.2959ZM59.84 12.2836C57.9075 14.1776 57.654 15.0437 58.6449 16.3841C61.5041 16.4557 62.2605 15.4427 61.7121 12.2836C61.0881 12.2836 60.4641 12.2836 59.84 12.2836Z" fill="#343F55" />
                <path d="M84.2861 17.1786C84.1651 17.8978 84.063 18.5153 83.9269 19.306C84.4337 19.6939 85.0917 20.1946 85.6703 20.6352C86.041 22.3673 85.1106 23.3915 83.8814 24.4232C83.2196 24.2915 82.4632 24.1408 81.7635 24.0014C81.1357 22.8153 81.0639 21.731 81.4118 20.4808C81.8467 18.9445 82.6032 17.8338 84.2861 17.1786Z" fill="#343F55" />
            </g>
            <defs>
                <clipPath id="clip0_13386_13561">
                    <rect width="77.7143" height="32" fill="white" transform="translate(26.6312 4)" />
                </clipPath>
            </defs>
        </svg>

    )
}

Chillox.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}
