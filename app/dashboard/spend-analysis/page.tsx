import Barchat from "@/components/dashboard/spend-analysis-comp/barchat";
import CardHeaders from "@/components/dashboard/spend-analysis-comp/cards-headers";
import Linechat from "@/components/dashboard/spend-analysis-comp/linechart";
import GeoMap from "@/components/dashboard/spend-analysis-comp/map";
import SpendActions from "@/components/dashboard/spend-analysis-comp/spend-actions";
import SupplierNeeds from "@/components/dashboard/spend-analysis-comp/supplierneeds";
import TreeMap from "@/components/dashboard/spend-analysis-comp/treemapchart";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DollarSign } from "lucide-react";
import { FC } from "react";

interface SpendAnalysisProps {}

const SpendAnalysis: FC<SpendAnalysisProps> = ({}) => {
	return (
		<div className="w-full bg-[#F6F6F6] p-4 lg:gap-6 lg:p-6 h-full">
			<Breadcrumb className=" ">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Spend Analysis</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<SpendActions />

			{/* cards */}
			<div className="">
				<div className="gap-4 grid grid-cols-1 sm:grid-cols-3 sm:col-span-3 xl:grid-cols-5 xl:col-span-5 mb-4">
					<CardHeaders
						description="lorem ipsum"
						Icon={
							<span>
								<svg
									width="28"
									height="28"
									viewBox="0 0 25 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.6003 10.9699V13.03C22.6003 13.58 22.1603 14.0299 21.6003 14.0499H19.6403C18.5603 14.0499 17.5703 13.2599 17.4803 12.1799C17.4203 11.5499 17.6603 10.9599 18.0803 10.5499C18.4503 10.1699 18.9603 9.94995 19.5203 9.94995H21.6003C22.1603 9.96995 22.6003 10.4199 22.6003 10.9699Z"
										fill="#121212"
									/>
									<path
										opacity="0.4"
										d="M18.0801 10.55C17.6601 10.96 17.4201 11.55 17.4801 12.18C17.5701 13.26 18.5601 14.05 19.6401 14.05H21.6001V15.5C21.6001 18.5 19.6001 20.5 16.6001 20.5H7.6001C4.6001 20.5 2.6001 18.5 2.6001 15.5V8.5C2.6001 5.78 4.2401 3.88 6.7901 3.56C7.0501 3.52 7.3201 3.5 7.6001 3.5H16.6001C16.8601 3.5 17.1101 3.50999 17.3501 3.54999C19.9301 3.84999 21.6001 5.76 21.6001 8.5V9.95001H19.5201C18.9601 9.95001 18.4501 10.17 18.0801 10.55Z"
										fill="#121212"
									/>
									<path
										d="M13.6001 9.75H7.6001C7.1901 9.75 6.8501 9.41 6.8501 9C6.8501 8.59 7.1901 8.25 7.6001 8.25H13.6001C14.0101 8.25 14.3501 8.59 14.3501 9C14.3501 9.41 14.0101 9.75 13.6001 9.75Z"
										fill="#121212"
									/>
								</svg>
							</span>
						}
						title="Total Spend"
						withSymbol
						countSymbol="$"
						count={12000}
					/>
					<CardHeaders
						description="lorem ipsum"
						Icon={
							<span>
								<svg
									width="28"
									height="28"
									viewBox="0 0 25 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M8.87019 14H4.2002C3.1002 14 2.2002 14.9 2.2002 16V22H8.87019V14Z"
										fill="#121212"
									/>
									<path
										d="M13.5304 10H10.8604C9.76035 10 8.86035 10.9 8.86035 12V22H15.5304V12C15.5304 10.9 14.6404 10 13.5304 10Z"
										fill="#121212"
									/>
									<path
										opacity="0.4"
										d="M20.2003 17H15.5303V22H22.2003V19C22.2003 17.9 21.3003 17 20.2003 17Z"
										fill="#121212"
									/>
									<path
										d="M15.2104 4.84999C15.5204 4.53999 15.6404 4.16999 15.5404 3.84999C15.4404 3.52999 15.1304 3.3 14.6904 3.23L13.7304 3.06999C13.6904 3.05999 13.6004 2.99998 13.5804 2.95998L13.0504 1.89998C12.6504 1.08998 11.7404 1.08998 11.3404 1.89998L10.8104 2.95998C10.7904 2.99998 10.7004 3.05999 10.6604 3.06999L9.70037 3.23C9.26037 3.3 8.96037 3.52999 8.85037 3.84999C8.75037 4.16999 8.87037 4.53999 9.18037 4.84999L9.92037 5.59999C9.95037 5.62999 9.99037 5.75 9.98037 5.79L9.77037 6.70998C9.61037 7.38998 9.87037 7.69997 10.0404 7.82997C10.2104 7.94997 10.5804 8.10999 11.1904 7.74999L12.0904 7.21999C12.1304 7.18999 12.2604 7.18999 12.3004 7.21999L13.2004 7.74999C13.4804 7.91999 13.7104 7.96999 13.8904 7.96999C14.1004 7.96999 14.2504 7.88997 14.3404 7.82997C14.5104 7.70997 14.7704 7.39998 14.6104 6.70998L14.4004 5.79C14.3904 5.74 14.4204 5.62999 14.4604 5.59999L15.2104 4.84999Z"
										fill="#121212"
									/>
								</svg>
							</span>
						}
						title="Suppliers Count"
						countSymbol="$"
						count={56}
					/>
					<CardHeaders
						description="lorem ipsum"
						Icon={
							<span>
								<svg
									width="25"
									height="24"
									viewBox="0 0 25 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M20.9002 6.93998C20.9002 7.47998 20.6102 7.96995 20.1502 8.21995L18.4102 9.15995L16.9302 9.94999L13.8602 11.61C13.5302 11.79 13.1702 11.88 12.8002 11.88C12.4302 11.88 12.0702 11.79 11.7402 11.61L5.4502 8.21995C4.9902 7.96995 4.7002 7.47998 4.7002 6.93998C4.7002 6.39998 4.9902 5.90995 5.4502 5.65995L7.4202 4.59996L8.9902 3.74998L11.7402 2.27C12.4002 1.91 13.2002 1.91 13.8602 2.27L20.1502 5.65995C20.6102 5.90995 20.9002 6.39998 20.9002 6.93998Z"
										fill="#121212"
									/>
									<path
										opacity="0.4"
										d="M10.7005 12.79L4.85049 9.86001C4.40049 9.63001 3.8805 9.66001 3.4505 9.92001C3.0205 10.18 2.77051 10.64 2.77051 11.14V16.67C2.77051 17.63 3.30049 18.49 4.16049 18.92L10.0105 21.8401C10.2105 21.9401 10.4305 21.99 10.6505 21.99C10.9105 21.99 11.1705 21.92 11.4005 21.77C11.8305 21.51 12.0805 21.05 12.0805 20.55V15.02C12.0905 14.08 11.5605 13.22 10.7005 12.79Z"
										fill="#121212"
									/>
									<path
										opacity="0.4"
										d="M22.8303 11.15V16.68C22.8303 17.63 22.3003 18.49 21.4403 18.92L15.5903 21.85C15.3903 21.95 15.1703 22 14.9503 22C14.6903 22 14.4303 21.93 14.1903 21.78C13.7703 21.52 13.5103 21.06 13.5103 20.56V15.04C13.5103 14.08 14.0403 13.22 14.9003 12.79L17.0503 11.72L18.5503 10.97L20.7503 9.87C21.2003 9.64 21.7203 9.66 22.1503 9.93C22.5703 10.19 22.8303 10.65 22.8303 11.15Z"
										fill="#121212"
									/>
									<path
										d="M18.4104 9.15997L16.9304 9.95001L7.42041 4.59998L8.99042 3.75L18.1704 8.92999C18.2704 8.98999 18.3504 9.06997 18.4104 9.15997Z"
										fill="#121212"
									/>
									<path
										d="M18.5503 10.97V13.24C18.5503 13.65 18.2103 13.99 17.8003 13.99C17.3903 13.99 17.0503 13.65 17.0503 13.24V11.72L18.5503 10.97Z"
										fill="#121212"
									/>
								</svg>
							</span>
						}
						title="Commodity Count"
						countSymbol="$"
						count={345}
					/>
					<CardHeaders
						description="lorem ipsum"
						Icon={
							<span>
								<svg
									width="28"
									height="28"
									viewBox="0 0 25 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M21.0201 8.7C19.9801 4.07 15.9401 2 12.4001 2C12.4001 2 12.4001 2 12.3901 2C8.86014 2 4.83014 4.07 3.78014 8.69C2.60014 13.85 5.76014 18.22 8.62014 20.98C9.68014 22 11.0401 22.51 12.4001 22.51C13.7601 22.51 15.1201 22 16.1701 20.98C19.0301 18.22 22.1901 13.86 21.0201 8.7Z"
										fill="#121212"
									/>
									<path
										d="M11.1498 13.7499C10.9598 13.7499 10.7698 13.6799 10.6198 13.5299L9.11984 12.0299C8.82984 11.7399 8.82984 11.2599 9.11984 10.9699C9.40984 10.6799 9.88984 10.6799 10.1798 10.9699L11.1498 11.9399L14.6198 8.46994C14.9098 8.17994 15.3898 8.17994 15.6798 8.46994C15.9698 8.75994 15.9698 9.23994 15.6798 9.52994L11.6798 13.5299C11.5298 13.6799 11.3398 13.7499 11.1498 13.7499Z"
										fill="#121212"
									/>
								</svg>
							</span>
						}
						title="Locations Count"
						countSymbol="$"
						count={12}
					/>
					<CardHeaders
						description="lorem ipsum"
						Icon={
							<span>
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
										fill="#121212"
									/>
									<path
										d="M15.75 9.75H8.25C7.84 9.75 7.5 9.41 7.5 9C7.5 8.59 7.84 8.25 8.25 8.25H15.75C16.16 8.25 16.5 8.59 16.5 9C16.5 9.41 16.16 9.75 15.75 9.75Z"
										fill="#121212"
									/>
									<path
										d="M15.75 15.75H8.25C7.84 15.75 7.5 15.41 7.5 15C7.5 14.59 7.84 14.25 8.25 14.25H15.75C16.16 14.25 16.5 14.59 16.5 15C16.5 15.41 16.16 15.75 15.75 15.75Z"
										fill="#121212"
									/>
								</svg>
							</span>
						}
						title="PO Count"
						countSymbol="$"
						count={207}
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="bg-white rounded-[12px]">
						<h2 className="text-[#8A8A8A] text-[18px] font-[400] p-5 pl-8 pt-7">
							Spending by supplier
						</h2>
						<Barchat />
					</div>
					<div className="bg-white rounded-[12px]">
						<h2 className="text-[#8A8A8A] text-[18px] font-[400] p-5 pt-7 pl-8">
							Spending by month
						</h2>
						<Linechat />
					</div>
					<div className="bg-white rounded-[12px]">
						<h2 className="text-[#8A8A8A] text-[18px] font-[400] p-5 pb-0 pt-7 pl-6">
							Spending by commodity
						</h2>

						<TreeMap />
					</div>
					<div className="bg-white rounded-[12px]">
						<h2 className="text-[#8A8A8A] text-[18px] font-[400] p-5 pb-0 pt-7 pl-6 mb-4">
							Spending by location
						</h2>

						<GeoMap />
					</div>
					<div className="col-span-1 sm:col-span-2 bg-white rounded-[12px]">
						<h2 className="text-[#8A8A8A] text-[18px] font-[400] p-5 pt-7 pl-6">
							Top Supplier spend
						</h2>
						<SupplierNeeds />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpendAnalysis;
