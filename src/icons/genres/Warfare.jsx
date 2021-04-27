import React from 'react';

const Component = props => (
  <svg height={32} viewBox="0 0 128 128" width={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor">
      <path d="M121.228 110.3a24.251 24.251 0 00-17.766-22.775 45.833 45.833 0 00-8.5-1.229c-1.281-.1-3.044-.259-5.394-.434-.507-.044-.937-.072-2.521-.223l-.765-.1a16.167 16.167 0 01-2.876-.551 4.838 4.838 0 01-2.738-2.095c-.087-.138-.175-.276-.254-.418a4.994 4.994 0 01-.573-1.726l-.966-7.55a23.643 23.643 0 007.06-9.5 46.738 46.738 0 002.257-8.542c.047-.241.1-.477.146-.718a8.3 8.3 0 001.371.126A8.554 8.554 0 0091 37.549a15.472 15.472 0 002.539-7.964l4.251-6.251a8.248 8.248 0 00.31-8.734l-3.187-5.488A18.351 18.351 0 0079.088 0H48.912a18.352 18.352 0 00-15.825 9.111L29.9 14.605a8.249 8.249 0 00.312 8.729l4.251 6.251a15.479 15.479 0 002.517 7.929 8.556 8.556 0 001.07 17.045 8.42 8.42 0 001.612-.166c.051.254.105.5.155.758a46.786 46.786 0 002.258 8.549 23.632 23.632 0 007.058 9.5l-.962 7.533a5.089 5.089 0 01-.842 2.119 5.853 5.853 0 01-2.929 2.22 8.06 8.06 0 01-2.569.446c-.9.082-1.92.2-3.641.321q-1.026.074-2.052.138a58.014 58.014 0 00-11.6 1.55 24.066 24.066 0 00-11.09 6.653A24.491 24.491 0 007.5 104.875a24.028 24.028 0 00-.75 5.957v15.418A1.749 1.749 0 008.5 128h111a1.749 1.749 0 001.75-1.75v-15.418c0-.178-.018-.352-.022-.532zm-5.995-9.321a21 21 0 012.379 7.6h-6.862a1.25 1.25 0 01-1.25-1.25 4.756 4.756 0 00-4.75-4.75h-2.438a1.251 1.251 0 01-1.25-1.25v-.125a1.252 1.252 0 011.25-1.25h12.318c.209.34.414.679.603 1.028zm-28.848-11.9l-10.046 15.458-9.046-4.144 15.921-11.825a24.488 24.488 0 002.613.442zm-38.17-2.143a9.088 9.088 0 001.27-1.179l1.489.3c1.8.368 3.607.641 5.416.856a64.69 64.69 0 007.61.469 64.545 64.545 0 007.826-.5 65.344 65.344 0 005.2-.828l1.425-.29A8.189 8.189 0 0079.6 86.89l-6.745 5.01-8.981 6.67-5.347-3.97zM86.34 37.708a12.145 12.145 0 01-8.355 3.377h-27.97a12.147 12.147 0 01-9.066-4.12 12.025 12.025 0 01-2.891-6.213h51.884a12.025 12.025 0 01-2.891 6.213c-.227.259-.465.506-.711.743zM94.76 46a5.066 5.066 0 01-5.06 5.06 4.723 4.723 0 01-.65-.045c.691-3.51 1.574-5.965 1.718-9.961A5.067 5.067 0 0194.76 46zM32.926 16.362l3.188-5.494a14.842 14.842 0 0112.8-7.37h30.174a14.841 14.841 0 0112.8 7.371l3.188 5.492a4.729 4.729 0 01-.179 5l-4 5.886h-53.79l-4-5.886a4.729 4.729 0 01-.181-4.999zm5.124 34.7a5.06 5.06 0 01-.821-10.053c-.106 2.082 1.138 7.415 1.712 9.972a4.906 4.906 0 01-.891.078zm7.268 11.322c-1.206-3.114-1.765-6.483-2.621-10.62l-.806-3.682c-.615-3.269-.747-2.268-1.14-6.556a15.561 15.561 0 009.264 3.062H61.52l-.663 4.872a3.431 3.431 0 003.393 3.94h1.957a1.75 1.75 0 000-3.5l-1.885.053.73-5.37h12.933a16.039 16.039 0 009.262-3.06c.287.131-1.7 9.313-1.944 10.237 0 0 0 .008-.021.1-.548 2.547-1.342 7.33-2.6 10.513a20.128 20.128 0 01-6.565 8.527A20.845 20.845 0 0164 74.927a21.139 21.139 0 01-12.12-4.033 20.113 20.113 0 01-6.562-8.513zm12.468 15.209a24.15 24.15 0 006.214.836A24.79 24.79 0 0075.62 75.4l.739 5.787a8.1 8.1 0 00.3 1.382l-.337.069a61.2 61.2 0 01-24.65 0l-.351-.072a8.18 8.18 0 00.317-1.376l.739-5.79a23.53 23.53 0 005.409 2.193zM41.977 89.016a11.874 11.874 0 002.67-.364l4.365 3.242 11.443 8.5-9.045 4.143-10.037-15.456zm-30.154 13.96a21.3 21.3 0 013.577-5.762h2.91a.391.391 0 01.391.39 3.9 3.9 0 003.891 3.892h7.835a.39.39 0 01.39.391v1.218a.391.391 0 01-.39.392H11.62c.067-.174.132-.349.203-.521zm-1.573 7.856a20.477 20.477 0 01.374-3.832h19.8a3.9 3.9 0 003.89-3.892v-1.218A3.9 3.9 0 0030.428 98h-7.835a.392.392 0 01-.393-.4 3.891 3.891 0 00-3-3.779 20.569 20.569 0 016.262-2.921 54.47 54.47 0 0110.9-1.434l1.044-.07L49.3 107.71a1.8 1.8 0 002.2.638l10.63-4.87V124.5H52.8a3.863 3.863 0 00.04-.391v-1.218A3.9 3.9 0 0048.953 119h-7.834a.392.392 0 01-.392-.391 3.9 3.9 0 00-3.89-3.891H28.25v-3.092a1.75 1.75 0 00-3.5 0V124.5h-14.5zm18 13.668v-6.283h8.587a.391.391 0 01.39.391 3.9 3.9 0 003.892 3.891h7.834a.392.392 0 01.391.392v1.218a.391.391 0 01-.391.391zm49.816 0v-3.125a1.314 1.314 0 011.313-1.312h.121a4.819 4.819 0 004.812-4.813 1.314 1.314 0 011.313-1.312h.125a1.313 1.313 0 011.312 1.312v9.25zm25.184 0v-12.875a1.75 1.75 0 00-3.5 0V124.5h-9.188v-9.25a4.818 4.818 0 00-4.812-4.812h-.125a4.819 4.819 0 00-4.813 4.812 1.314 1.314 0 01-1.312 1.313h-.121a4.819 4.819 0 00-4.813 4.812v3.125h-8.942v-21.022l10.631 4.87a1.764 1.764 0 002.2-.637l11.876-18.276h.083c.9.07 1.789.138 2.67.215.53.047 1.061.089 1.594.132a42.7 42.7 0 017.86 1.116 20.568 20.568 0 019.352 5.553h-9.578a4.756 4.756 0 00-4.75 4.75v.125a4.756 4.756 0 004.75 4.75h2.438a1.252 1.252 0 011.25 1.25 4.756 4.756 0 004.75 4.75h7V124.5z" />
      <path d="M63.875 63.5a10.368 10.368 0 008.025-3.343 1.749 1.749 0 10-2.7-2.224A6.987 6.987 0 0163.875 60a6.988 6.988 0 01-5.326-2.07 1.749 1.749 0 10-2.7 2.224 10.373 10.373 0 008.026 3.346zM57.5 17.657l5.469 4a1.751 1.751 0 002.068 0l5.469-4a1.751 1.751 0 00.716-1.412V8.374a1.75 1.75 0 00-1.75-1.75H58.531a1.749 1.749 0 00-1.75 1.75v7.871a1.751 1.751 0 00.719 1.412zm2.784-7.533h7.438v5.233L64 18.08l-3.719-2.723z" />
    </g>
  </svg>
);

export default Component;