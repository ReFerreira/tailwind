import React from "react";

// import { Container } from './styles';

export function Stories() {
  return (
    <div class="flex p-4 space-x-3 border">
      <div class="text-center text-xs cursor-pointer">
        <div class="border-2 rounded-full border-pink-600">
          <img
            class="w-14 h-14 rounded-full border-2"
            src="https://images.unsplash.com/photo-1569243478735-8fcf29052262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
        Emma
      </div>

      <div class="text-center text-xs cursor-pointer">
        <div class="border-2 rounded-full border-pink-600">
          <img
            class="w-14 h-14 rounded-full border-2"
            src="https://images.unsplash.com/photo-1519721782138-5de3d68a2b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHV0Y2glMjBnaXJsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
        </div>
        Sophie
      </div>

      <div class="text-center text-xs cursor-pointer">
        <div class="border-2 rounded-full border-pink-600">
          <img
            class="w-14 h-14 rounded-full border-2"
            src="https://images.unsplash.com/photo-1616497467284-03ab66f947a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV0aGVybGFuZHMlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
        </div>
        Julia
      </div>
    </div>
  );
}
