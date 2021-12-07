import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import tw from "twin.macro";
import { ClassNames } from "@emotion/react";

export default function Modal({
  children,
  content,
  cinema,
  onOpen,
  onClose,
  slug,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  // prevent the modal rending in the dom before it's needed
  const [renderModal, setRenderModal] = useState(false);
  const cancelButtonRef = useRef(null);
  // if an ID is set, we should update the path to it
  return (
    <>
      <div
        {...rest}
        id={slug}
        onClick={() => {
          setRenderModal(true);
          setTimeout(() => {
            setOpen(true);
            onOpen && onOpen();
            if (slug) {
              window.history.replaceState(null, null, `#${slug}`);
            }
          }, 1);
        }}
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
                onClose={() => {
                  setOpen(false);
                  onClose && onClose();
                  if (slug) {
                    window.history.replaceState(null, null, " ");
                  }
                }}
              >
                <div tw="min-h-screen block p-0">
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
                    tw="inline-block align-middle h-screen"
                    ref={cancelButtonRef}
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter={css(tw`ease-out duration-300`)}
                    enterFrom={css(tw`translate-y-0 scale-95`)}
                    enterTo={css(tw`opacity-100 translate-y-0 scale-100`)}
                    leave={css(tw`ease-in duration-200`)}
                    leaveFrom={css(tw`opacity-100 translate-y-0 scale-100`)}
                    leaveTo={css(tw`opacity-0 translate-y-0 scale-95`)}
                  >
                    <div tw="inline-block align-middle text-left overflow-hidden transform transition-all text-white w-full pointer-events-none px-2">
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
