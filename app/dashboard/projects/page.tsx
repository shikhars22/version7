'use client'
import { FC, useState } from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { ColumnDef, Row } from '@tanstack/react-table'
import { projectType, projects } from '@/data/projects'
import { DataTable } from '@/components/datatable'
import { DataTableForKanban } from '@/components/datatableForCanban'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Plus } from 'lucide-react'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
	const data = 1
	const [layout, setLayout] = useState<'original' | 'kanban'>('original')

	const projectColumn: ColumnDef<projectType>[] = [
		{
			accessorKey: 'name',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A] pl-8'>
						Project Name
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				const getStatusColor = (status: string) => {
					switch (status) {
						case 'red':
							return '#C24E6A'
						case 'yellow':
							return '#C2A84E'
						case 'green':
							return '#7CC44E'
						default:
							return '#8A8A8A'
					}
				}
				if (layout === 'kanban') {
					return (
						<Link href={`/dashboard/projects/${data.id}`}>
							<div className='pl-8 flex items-center'>
								<div
									className='w-4 h-8 rounded-full mr-2 -ml-7'
									style={{ backgroundColor: getStatusColor(data.status) }}
								></div>
								<div>
									<h1 className='text-[#121212] font-[700] text-[15px] mb-1'>
										{data.name}
									</h1>
									<p className='text-[12px] font-[400] text-[#8A8A8A]'>
										{data.createdat}
									</p>
								</div>
							</div>
						</Link>
					)
				} else {
					return (
						<Link href={`/dashboard/projects/${data.id}`}>
							<div className='pl-8'>
								<h1 className='text-[#121212] font-[700] text-[15px] mb-1'>
									{data.name}
								</h1>
								<p className='text-[12px] font-[400] text-[#8A8A8A]'>
									{data.createdat}
								</p>
							</div>
						</Link>
					)
				}
			},
		},
		...(layout === 'original'
			? [
					{
						accessorKey: 'phases',
						header: () => {
							return (
								<div className='text-[14px] font-[700] text-[#8A8A8A]'>
									Phases
								</div>
							)
						},
						cell: ({ row }: { row: Row<projectType> }) => {
							const data = row.original
							const getButtonClass = (status: string, baseClass: string) => {
								switch (status) {
									case 'red':
										return `${baseClass} bg-[#FDE7ED] text-[#C24E6A]`
									case 'yellow':
										return `${baseClass} bg-[#FDF8E7] text-[#C2A84E]`
									case 'green':
										return `${baseClass} bg-[#F0FEE7] text-[#7CC44E]`
									default:
										return baseClass
								}
							}
							return (
								<Link href={`/dashboard/projects/${data.id}`}>
									{data.phases === 'Initiation' && (
										<button
											className={getButtonClass(
												data.status,
												'text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'
											)}
										>
											Initiation
										</button>
									)}
									{data.phases === 'Planning' && (
										<button
											className={getButtonClass(
												data.status,
												'text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'
											)}
										>
											Planning
										</button>
									)}
									{data.phases === 'Execution' && (
										<button
											className={getButtonClass(
												data.status,
												'text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'
											)}
										>
											Execution
										</button>
									)}
									{data.phases === 'Closure' && (
										<button
											className={getButtonClass(
												data.status,
												'text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'
											)}
										>
											Closure
										</button>
									)}
									{data.phases === 'Control' && (
										<button
											className={getButtonClass(
												data.status,
												'text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'
											)}
										>
											Control
										</button>
									)}
								</Link>
							)
						},
					},
			  ]
			: []),

		{
			accessorKey: 'cost',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Cost Savings
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className='font-[600] text-[15px] text-[#3B3C41]'>
							{data.cost}
						</div>
					</Link>
				)
			},
		},
		{
			accessorKey: 'affected',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Affected Customers
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className='font-[500] text-[15px] text-[#3B3C41]'>
							{data.affected}
						</div>
					</Link>
				)
			},
		},
		{
			accessorKey: 'part',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Part # & Description
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div>
							<h1 className='text-[#3B3C41] font-[600] text-[14px] mb-1'>
								{data.part}
							</h1>
							<p className='text-[14px] font-[400] text-[#8A8A8A]'>
								{data.description}
							</p>
						</div>
					</Link>
				)
			},
		},
		{
			accessorKey: 'sponsor',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Project Sponsor
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className='font-[400] text-[14px] text-[#3B3C41]'>
							{data.sponsor}
						</div>
					</Link>
				)
			},
		},
		// {
		// 	id: "actions",
		// 	enableHiding: false,
		// 	cell: ({ row }) => {
		// 		const data = row.original;

		// 		return (
		// 			<Link
		// 				href={`/dashboard/projects/${data.id}`}
		// 				// className="text-[14px] font-[500] text-[#3B3C41]"
		// 			>
		// 				Details
		// 			</Link>
		// 		);
		// 	},
		// },
	]

	const phases = {
		Initiation: projects.filter((project) => project.phases === 'Initiation'),
		Planning: projects.filter((project) => project.phases === 'Planning'),
		Execution: projects.filter((project) => project.phases === 'Execution'),
		Control: projects.filter((project) => project.phases === 'Control'),
		Closure: projects.filter((project) => project.phases === 'Closure'),
	}
	return (
		<div className='bg-[#F6F6F6] p-4 lg:gap-6 lg:p-6 min-h-screen w-full'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/' className='text-muted-foreground/70'>
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className='text-[16px] font-[400]'>
							All Projects
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className='mb-4 flex justify-between '>
				<h1 className='mt-4 mb-7 text-[32px] font-[700]'>All Projects</h1>
				<Button
					onClick={() =>
						setLayout(layout === 'original' ? 'kanban' : 'original')
					}
					className='mt-6'
				>
					{layout === 'original'
						? 'Switch to Kanban View'
						: 'Switch to Original View'}
				</Button>
			</div>

			<main className='bg-transparent w-full h-full'>
				{layout === 'original' ? (
					data > 0 ? (
						<DataTable
							columns={projectColumn}
							data={projects}
							rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
							headerStyle='h-[70px] border-0'
							buttonWrapper='bg-white my-4 h-[85px] px-5'
						/>
					) : (
						<div className='w-full h-full flex justify-center'>
							<div className='pt-14 sm:pt-[80px]'>
								<h1 className='text-[15px] font-[400] text-[#3B3C41] text-center mb-8'>
									There are no projects.
								</h1>
								<Link href={'/dashboard/projects/create'}>
									<Button
										variant={'default'}
										className='bg-[#6649B6] px-5 text-[14px] font-[400]'
									>
										<span className='mr-[20px] border-[2px] rounded-[6px] p-0.5 border-white'>
											<Plus size={13} color='#fff' />
										</span>
										Create new sourcing project
									</Button>
								</Link>
							</div>
						</div>
					)
				) : (
					<div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
						<div className='col'>
							<div className='text-[#808080] flex items-center text-[15px] font-[700] mb-4 '>
								<span className='flex justify-center items-center bg-[#808080] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
									1
								</span>
								Initiation
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Initiation}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>

						<div className='col'>
							<div className='text-[#1e90ff] flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center font-[700]'>
									<span className='flex justify-center items-center bg-[#1e90ff] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
										2
									</span>
									Planning
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Planning}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
						<div className='col'>
							<div className='text-[#1e90ff] flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center font-[700]'>
									<span className='flex justify-center items-center bg-[#1e90ff] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
										3
									</span>
									Execution
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Execution}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
						<div className='col'>
							<div className='text-[#1e90ff] flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center font-[700]'>
									<span className='flex justify-center items-center bg-[#1e90ff] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
										4
									</span>
									Control
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Control}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
						<div className='col'>
							<div className='text-[#1ec31e] flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center font-[700]'>
									<span className='flex justify-center items-center bg-[#1ec31e] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
										5
									</span>
									Closure
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Closure}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	)
}

export default Projects
