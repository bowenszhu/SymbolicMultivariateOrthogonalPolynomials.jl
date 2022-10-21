var documenterSearchIndex = {"docs":
[{"location":"api/#API-reference","page":"API","title":"API reference","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [MOPS]","category":"page"},{"location":"api/#MOPS.arm-Tuple{AbstractVector, Integer, Integer}","page":"API","title":"MOPS.arm","text":"arm(κ::AbstractVector, i::Integer, j::Integer) -> Any\n\n\nCompute the arm-length of a partition at a square.\n\nGiven the diagram of the partition κ, the arm-length of the (i, j) square S is the number of squares to the right of S, in other words arm(κ, i, j) = κ[j] - i.\n\nExamples\n\n┌───┬───┬───┬───┐\n│   │ S │   │   │\n├───┼───┼───┼───┘\n│   │   │   │\n├───┼───┴───┘\n│   │\n├───┤\n│   │\n└───┘\n\njulia> arm([4, 3, 1, 1], 2, 1)\n2\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.conjugate-Union{Tuple{AbstractVector{T}}, Tuple{T}} where T","page":"API","title":"MOPS.conjugate","text":"conjugate(κ::AbstractArray{T, 1}) -> Any\n\n\nReturn the conjugate partition.\n\nExamples\n\n┌───┬───┬───┬───┐         ┌───┬───┬───┬───┬───┐\n│   │   │   │   │         │   │   │   │   │   │\n├───┼───┼───┼───┘         ├───┼───┼───┼───┼───┘\n│   │   │   │             │   │   │   │   │\n├───┼───┼───┘        ➔    ├───┼───┼───┴───┘\n│   │   │                 │   │   │\n├───┼───┤                 ├───┼───┘\n│   │   │                 │   │\n├───┼───┘                 └───┘\n│   │\n└───┘\n\njulia> conjugate([4, 3, 2, 2, 1]) |> println\n[5, 4, 2, 1]\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.gsfact-Tuple{Any, Any, AbstractVector}","page":"API","title":"MOPS.gsfact","text":"gsfact(α, r, κ::AbstractVector) -> Any\n\n\nCompute the generalized shifted factorial.\n\nThe generalized shifted factorial extends the definition of factorials to include partition parameters. More precisely\n\noperatornamegsfact(αrκ)=\n_i=1^operatornamelength(κ)operatornamesfactleft(r-fraci-1ακ_iright)\n\nSee also: sfact.\n\nExamples\n\njulia> gsfact(1, 3, [3, 2, 1]) |> Int\n360\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.issubpar-Tuple{AbstractVector, AbstractVector}","page":"API","title":"MOPS.issubpar","text":"issubpar(σ::AbstractVector, κ::AbstractVector) -> Bool\n\n\nDetermines if a partition is a subpartition of the other.\n\nReturns true if σ[i] ≤ κ[i] for all i.\n\nExamples\n\njulia> issubpar([5, 3], [6, 4, 2])\ntrue\n\njulia> issubpar([5], [4, 1])\nfalse\n\njulia> issubpar([5, 5, 1], [6, 5])\nfalse\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.leg-Tuple{AbstractVector, Integer, Integer}","page":"API","title":"MOPS.leg","text":"leg(κ::AbstractVector, i::Integer, j::Integer) -> Any\n\n\nCompute the leg-length of a partition at a square.\n\nGiven the diagram of the partition κ, the arm-length of the (i, j) square S is the number of squares below S.\n\nExamples\n\n┌───┬───┬───┬───┐\n│   │ S │   │   │\n├───┼───┼───┼───┘\n│   │   │   │\n├───┼───┼───┤\n│   │   │   │\n└───┴───┴───┘\n\njulia> leg([4, 3, 3], 2, 1)\n2\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.lhook-Tuple{Any, AbstractVector, Integer, Integer}","page":"API","title":"MOPS.lhook","text":"lhook(α, κ::AbstractVector, i::Integer, j::Integer) -> Any\n\n\nCompute the lower hook length of a partition at a square.\n\nGiven the parameter α, the partition κ and the location (i, j),\n\noperatornamelhook(ακij)=operatornameleg(κij)+1+αoperatornamearm(κij)\n\nSee also: arm, leg, uhook.\n\nExamples\n\n┌───┬───┬───┬───┐\n│   │ S │   │   │\n├───┼───┼───┴───┘\n│   │   │\n├───┼───┘\n│   │\n└───┘\n\njulia> lhook(2, [4, 2, 1], 2, 1)\n6\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.par-Tuple{Integer}","page":"API","title":"MOPS.par","text":"par(k::Integer) -> Vector{Vector{Int64}}\n\n\nGiven a positive integer k, produce a list of all partitions which sum up to k.\n\nExamples\n\njulia> par(4)\n5-element Vector{Vector{Int64}}:\n [4]\n [3, 1]\n [2, 2]\n [2, 1, 1]\n [1, 1, 1, 1]\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.parvalid-Tuple{AbstractVector}","page":"API","title":"MOPS.parvalid","text":"parvalid(κ::AbstractVector) -> Bool\n\n\nCheck if the given partition is valid.\n\nA partition kappa is a finite, ordered, non-increasing sequence of positive integers kappa_1geqkappa_1geqkappa_1geqldotsgeqkappa_l.\n\nExamples\n\njulia> parvalid(Int[])\ntrue\n\njulia> parvalid([4, 3, 1, 1])\ntrue\n\njulia> parvalid([5, 3, 4])\nfalse\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.rho-Tuple{Any, AbstractVector}","page":"API","title":"MOPS.rho","text":"rho(α, κ::AbstractVector) -> Any\n\n\nThe ρ function of a partition.\n\nGiven the Jack parameter (real positive integer) α and the partition κ,\n\nρ(ακ)=_i=1^operatornamelength(κ)κ_ileft(κ_i-1-frac2(i-1)αright)\n\nExamples\n\njulia> rho(2, [3, 1]) |> Int\n5\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.sfact-Tuple{Any, Any}","page":"API","title":"MOPS.sfact","text":"sfact(r, k) -> Any\n\n\nCompute the shifted factorial, which is the ratio of two factorials\n\nfrac(r+k+1)(r-1)\n\nfor integral k or equivalently the ratio of two Gamma functions\n\nfracΓ(r+k)Γ(r)\n\nThe shifted factorial is also known as the Pochhammer symbol and rising factorial.\n\nExamples\n\njulia> sfact(3, 5)\n2520\n\n\n\n\n\n","category":"method"},{"location":"api/#MOPS.uhook-Tuple{Any, AbstractVector, Integer, Integer}","page":"API","title":"MOPS.uhook","text":"uhook(α, κ::AbstractVector, i::Integer, j::Integer) -> Any\n\n\nCompute the upper hook length of a partition at a square.\n\nGiven the parameter α, the partition κ and the location (i, j),\n\noperatornameuhook(ακij)=operatornameleg(κij)+α(1+operatornamearm(κij))\n\nSee also: arm, leg, lhook.\n\nExamples\n\n┌───┬───┬───┬───┐\n│   │ S │   │   │\n├───┼───┼───┴───┘\n│   │   │\n├───┼───┘\n│   │\n└───┘\n\njulia> uhook(2, [4, 2, 1], 2, 1)\n7\n\n\n\n\n\n","category":"method"},{"location":"#MOPS.jl:-Multivariate-Orthogonal-Polynomials-Symbolically","page":"Home","title":"MOPS.jl: Multivariate Orthogonal Polynomials Symbolically","text":"","category":"section"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
