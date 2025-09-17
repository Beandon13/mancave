import { useEffect, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure iframe reloads when modal opens
    if (isOpen && iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = src;
    }
  }, [isOpen]);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[95vw] md:w-[85vw] lg:w-[75vw] max-w-[1000px] h-[90vh] md:h-[85vh] translate-x-[-50%] translate-y-[-50%] p-0 bg-white rounded-lg shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Close button positioned in top right corner with padding */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-[100] rounded-full bg-man-cave-accent text-white p-2 hover:bg-red-600 transition-colors duration-200 shadow-lg"
            aria-label="Close booking modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Iframe container */}
          <div className="w-full h-full rounded-lg overflow-hidden">
            <iframe
              ref={iframeRef}
              src="https://mancavesqnj.setmore.com"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full bg-white"
              title="Book an appointment with Man Cave Barbershop"
              allow="payment"
            />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}