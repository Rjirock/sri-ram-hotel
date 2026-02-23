export const metadata = {
    title: "Refund & Cancellation Policy | Sri Ram Hotel",
  };
  
  export default function RefundAndCancellationPolicy() {
    return (
      <section className="bg-[#FAF7F2] py-20">
        <div className="max-w-4xl mx-auto px-6">
  
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Refund & Cancellation Policy
            </h1>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              This policy outlines the terms related to booking cancellations,
              refunds, and no-show scenarios at Sri Ram Hotel. Guests are advised
              to read this policy carefully before making a reservation.
            </p>
          </div>
  
          {/* Content */}
          <div className="space-y-8 text-gray-700 text-[15.5px] leading-relaxed">
  
            {/* 1 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                1. Room Booking Confirmation
              </h2>
              <p className="mt-3">
                All room bookings made through our website, phone, or other
                official channels are subject to availability. A booking is
                considered confirmed only after successful payment and
                confirmation from Sri Ram Hotel.
              </p>
            </div>
  
            {/* 2 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                2. Cancellation Policy
              </h2>
              <p className="mt-3">
                Guests may cancel their reservation as per the following terms:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Cancellations made <strong>24 hours prior to the check-in date</strong>
                  may be eligible for a refund.
                </li>
                <li>
                  Cancellations made within <strong>24 hours of check-in</strong>
                  may not be eligible for a refund.
                </li>
                <li>
                  Same-day cancellations are generally treated as no-shows.
                </li>
              </ul>
            </div>
  
            {/* 3 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                3. No-Show Policy
              </h2>
              <p className="mt-3">
                In the event of a no-show (failure to arrive without prior
                cancellation), the booking amount may be retained and no refund
                will be provided.
              </p>
            </div>
  
            {/* 4 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                4. Refund Processing
              </h2>
              <p className="mt-3">
                Eligible refunds will be processed to the original mode of
                payment. Refunds are typically completed within
                <strong> 5–7 business days</strong>, depending on the payment
                provider and banking timelines.
              </p>
            </div>
  
            {/* 5 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                5. Payment Gateway Charges
              </h2>
              <p className="mt-3">
                Any applicable payment gateway or transaction charges may be
                deducted from the refundable amount, as per the policies of the
                payment service provider.
              </p>
            </div>
  
            {/* 6 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                6. Booking Modifications
              </h2>
              <p className="mt-3">
                Requests for changes to booking dates or room types are subject
                to availability and hotel discretion. Additional charges may
                apply in case of modifications.
              </p>
            </div>
  
            {/* 7 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                7. Force Majeure
              </h2>
              <p className="mt-3">
                Sri Ram Hotel shall not be held responsible for cancellations or
                delays caused due to circumstances beyond our control, including
                natural disasters, government restrictions, or unforeseen events.
              </p>
            </div>
  
            {/* 8 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                8. Policy Changes
              </h2>
              <p className="mt-3">
                Sri Ram Hotel reserves the right to amend or update this Refund &
                Cancellation Policy at any time. Changes will be effective
                immediately upon being published on this page.
              </p>
            </div>
  
            {/* 9 */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                9. Contact for Refund Queries
              </h2>
              <p className="mt-3">
                For any questions related to cancellations or refunds, guests are
                requested to contact us using the details provided on our Contact
                Us page.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }