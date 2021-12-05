import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import tw from "twin.macro";
import { ClassNames } from "@emotion/react";

export default function Modal({ children, content, cinema, ...rest }) {
  const [open, setOpen] = useState(false);
  // prevent the modal rending in the dom before it's needed
  const [renderModal, setRenderModal] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <div
        onClick={() => {
          setRenderModal(true);
          setTimeout(() => setOpen(true), 1);
        }}
        {...rest}
      >
        {children}
      </div>
      {renderModal && (
        <ClassNames>
          {({ css }) => (
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                tw="fixed z-50 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
              >
                <div tw="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter={css(tw`ease-out duration-300`)}
                    enterFrom={css(tw`opacity-0`)}
                    enterTo={css(tw`opacity-100`)}
                    leave={css(tw`ease-in duration-200`)}
                    leaveFrom={css(tw`opacity-100`)}
                    leaveTo={css(tw`opacity-0`)}
                  >
                    <Dialog.Overlay
                      css={[
                        tw`fixed inset-0 bg-gray-950 bg-opacity-10 transition-opacity backdrop-blur-md`,
                        cinema && tw`bg-opacity-90`,
                      ]}
                    />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    tw="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                    ref={cancelButtonRef}
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter={css(tw`ease-out duration-300`)}
                    enterFrom={css(
                      tw`opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`
                    )}
                    enterTo={css(tw`opacity-100 translate-y-0 sm:scale-100`)}
                    leave={css(tw`ease-in duration-200`)}
                    leaveFrom={css(tw`opacity-100 translate-y-0 sm:scale-100`)}
                    leaveTo={css(
                      tw`opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`
                    )}
                  >
                    <div tw="inline-block align-middle text-left overflow-hidden transform transition-all text-white w-full pointer-events-none">
                      {content}
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          )}
        </ClassNames>
      )}
    </>
  );
}
