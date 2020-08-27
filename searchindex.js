Search.setIndex({docnames:["contributing","convolution","correctness","design","diffusion","examples","hostcode","index","install","matrix_multiplication","user-api"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,nbsphinx:3,sphinx:56},filenames:["contributing.rst","convolution.ipynb","correctness.rst","design.rst","diffusion.ipynb","examples.rst","hostcode.rst","index.rst","install.rst","matrix_multiplication.ipynb","user-api.rst"],objects:{"kernel_tuner.c":{CFunctions:[3,0,1,""]},"kernel_tuner.c.CFunctions":{__init__:[3,1,1,""],benchmark:[3,1,1,""],cleanup_lib:[3,1,1,""],compile:[3,1,1,""],memcpy_dtoh:[3,1,1,""],memcpy_htod:[3,1,1,""],memset:[3,1,1,""],ready_argument_list:[3,1,1,""],run_kernel:[3,1,1,""]},"kernel_tuner.core":{DeviceInterface:[3,0,1,""]},"kernel_tuner.core.DeviceInterface":{__init__:[3,1,1,""],benchmark:[3,1,1,""],check_kernel_output:[3,1,1,""],compile_and_benchmark:[3,1,1,""],compile_kernel:[3,1,1,""],copy_constant_memory_args:[3,1,1,""],copy_texture_memory_args:[3,1,1,""],create_kernel_instance:[3,1,1,""],get_environment:[3,1,1,""],memcpy_dtoh:[3,1,1,""],ready_argument_list:[3,1,1,""],run_kernel:[3,1,1,""]},"kernel_tuner.cuda":{CudaFunctions:[3,0,1,""]},"kernel_tuner.cuda.CudaFunctions":{__init__:[3,1,1,""],benchmark:[3,1,1,""],compile:[3,1,1,""],copy_constant_memory_args:[3,1,1,""],copy_shared_memory_args:[3,1,1,""],copy_texture_memory_args:[3,1,1,""],memcpy_dtoh:[3,1,1,""],memcpy_htod:[3,1,1,""],memset:[3,1,1,""],ready_argument_list:[3,1,1,""],run_kernel:[3,1,1,""]},"kernel_tuner.opencl":{OpenCLFunctions:[3,0,1,""]},"kernel_tuner.opencl.OpenCLFunctions":{__init__:[3,1,1,""],benchmark:[3,1,1,""],compile:[3,1,1,""],memcpy_dtoh:[3,1,1,""],memcpy_htod:[3,1,1,""],memset:[3,1,1,""],ready_argument_list:[3,1,1,""],run_kernel:[3,1,1,""]},"kernel_tuner.runners.sequential":{SequentialRunner:[3,0,1,""]},"kernel_tuner.runners.sequential.SequentialRunner":{__init__:[3,1,1,""],run:[3,1,1,""]},"kernel_tuner.strategies":{basinhopping:[3,3,0,"-"],brute_force:[3,3,0,"-"],diff_evo:[3,3,0,"-"],minimize:[3,3,0,"-"],random_sample:[3,3,0,"-"]},"kernel_tuner.strategies.basinhopping":{tune:[3,2,1,""]},"kernel_tuner.strategies.brute_force":{tune:[3,2,1,""]},"kernel_tuner.strategies.diff_evo":{tune:[3,2,1,""]},"kernel_tuner.strategies.minimize":{get_bounds:[3,2,1,""],get_bounds_x0_eps:[3,2,1,""],setup_method_arguments:[3,2,1,""],setup_method_options:[3,2,1,""],snap_to_nearest_config:[3,2,1,""],tune:[3,2,1,""],unscale_and_snap_to_nearest:[3,2,1,""]},"kernel_tuner.strategies.random_sample":{tune:[3,2,1,""]},"kernel_tuner.util":{check_argument_list:[3,2,1,""],check_argument_type:[3,2,1,""],check_restrictions:[3,2,1,""],check_tune_params_list:[3,2,1,""],delete_temp_file:[3,2,1,""],detect_language:[3,2,1,""],get_config_string:[3,2,1,""],get_grid_dimensions:[3,2,1,""],get_instance_string:[3,2,1,""],get_kernel_string:[3,2,1,""],get_problem_size:[3,2,1,""],get_temp_filename:[3,2,1,""],get_thread_block_dimensions:[3,2,1,""],looks_like_a_filename:[3,2,1,""],normalize_verify_function:[3,2,1,""],prepare_kernel_string:[3,2,1,""],process_cache:[3,2,1,""],read_file:[3,2,1,""],replace_param_occurrences:[3,2,1,""],setup_block_and_grid:[3,2,1,""],write_file:[3,2,1,""]},"kernel_tuner.wrappers":{cpp:[10,2,1,""]},kernel_tuner:{run_kernel:[10,2,1,""],tune_kernel:[10,2,1,""],util:[3,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function","3":"py:module"},terms:{"000001":10,"001":10,"004":7,"018869400024":4,"02665598392":4,"034790039m":9,"03752319813":4,"040820312m":9,"04807043076":4,"05262081623":4,"054880023":4,"05549435616":4,"05816960335":4,"05957758427":4,"0629119873":4,"06332798004":4,"06672639847":4,"06709122658":4,"06844799519":4,"06983039379":4,"07002239227":4,"0731967926":4,"07386879921":4,"07484800816":4,"07508480549":4,"0759360075":4,"078149414m":9,"0799423933":4,"08220798969":4,"08389122486":4,"09015038013":4,"09730558395":4,"09794559479":4,"0x2aaab952f240":4,"0x2aaabbdcb2e8":4,"0x2aab1c98b3c8":4,"100":10,"1000":4,"10000000":7,"10033922195":4,"10066559315":4,"10125439167":4,"1016":7,"1024":[1,4],"105":9,"106":9,"10700161457":4,"10740480423":4,"108":9,"115":9,"11514236927":4,"116":9,"12000002861":4,"12033278942":4,"128":[1,4,7,9],"128x32":4,"12996521m":9,"13023357391":4,"13297917843":4,"133":9,"134233":3,"137":9,"139":9,"14420480728":4,"14729599953":4,"15089921951":4,"15916161537":4,"1635":9,"177":9,"180":9,"181":9,"18713598251":4,"19084160328":4,"199511719m":9,"1e3":4,"1xn":9,"2000":4,"2018":7,"2019":7,"2048":1,"205224609m":9,"22305920124":4,"225":4,"225f":4,"234342":3,"2369506836m":9,"241601563m":9,"248303223m":9,"250497437m":9,"256":7,"2634239912":4,"264831543m":9,"29789438248":4,"2u_":4,"31661438942":4,"3269824028":4,"32989502m":9,"32x2":4,"347":7,"358":7,"4096":[1,2,4,6,9],"4164":4,"423038482666016":4,"425039673m":9,"431848145m":9,"437109375m":9,"450820923m":9,"4696899414m":9,"471447754m":9,"494":9,"4u_":4,"500":4,"512":7,"513378906m":9,"514":9,"538227200508":4,"539891195297":4,"540352010727":4,"540383994579":4,"542387211323":4,"542937588692":4,"544691193104":4,"548":9,"550105595589":4,"554745602608":4,"560505592823":4,"562521612644":4,"563417613506":4,"565254402161":4,"56585599184":4,"567144775m":9,"567417597771":4,"568556785583":4,"569388794899":4,"573836791515":4,"575":9,"575859189034":4,"576044797897":4,"577215993404":4,"578681600094":4,"578745603561":4,"579052734m":9,"579411196709":4,"579904007912":4,"58035838604":4,"581280004978":4,"588492810726":4,"59088640213":4,"595276796818":4,"597":9,"597267186642":4,"60216319561":4,"605760002136":4,"60942081213":4,"6099975586m":9,"615148806572":4,"618003201485":4,"618598401546":4,"621254396439":4,"622":9,"622867202759":4,"624492788315":4,"625260794163":4,"626163220406":4,"626976013184":4,"627136015892":4,"631142401695":4,"632006394863":4,"637958395481":4,"638348805904":4,"643359994888":4,"6434997559m":9,"643820810318":4,"646092808247":4,"648620784283":4,"649779188633":4,"64x4":4,"650336003304":4,"652575993538":4,"657920002937":4,"662041604519":4,"662566399574":4,"66344319582":4,"666003203392":4,"666656005383":4,"667251205444":4,"667347204685":4,"673248004913":4,"675232005119":4,"675923216343":4,"676595199108":4,"677363204956":4,"679":9,"679372787476":4,"679394531m":9,"680422389507":4,"680996704m":9,"681350398064":4,"682188808918":4,"685670387745":4,"68781440258":4,"687955200672":4,"689356791973":4,"690009605885":4,"690893555m":9,"691116797924":4,"691385602951":4,"692665600777":4,"694451200962":4,"69627519846":4,"697094392776":4,"699366402626":4,"700883197784":4,"70140799284":4,"703302407265":4,"705":9,"705055999756":4,"705900788307":4,"705932807922":4,"710278391838":4,"713843202591":4,"714169609547":4,"716115188599":4,"7168192029":4,"721862399578":4,"722668802738":4,"723999989033":4,"725548803806":4,"726335990429":4,"727967989445":4,"730982398987":4,"731334400177":4,"731891202927":4,"732409596443":4,"733248019218":4,"735436797142":4,"740518403053":4,"741964805126":4,"742822266m":9,"75041918755":4,"750636804104":4,"752479994297":4,"759308815":4,"759679996967":4,"760915207863":4,"761139214039":4,"763775992393":4,"766662418842":4,"768064010143":4,"771103990078":4,"77759360075":4,"779033613205":4,"780":9,"782060790062":4,"78363519907":4,"788345599174":4,"791257584095":4,"792108798027":4,"792595207691":4,"793":9,"795379639m":9,"797900807858":4,"799059200287":4,"801119995117":4,"801798415184":4,"801996803284":4,"803033602238":4,"803718411922":4,"804953610897":4,"805299210548":4,"806828796864":4,"808000004292":4,"808211183548":4,"808274841m":9,"816":9,"821881604195":4,"822137594223":4,"824838399887":4,"826515209675":4,"832":9,"832300806046":4,"833420813084":4,"835481595993":4,"835494399071":4,"836999512m":9,"837299215794":4,"837804794312":4,"838195204735":4,"840755212307":4,"840908801556":4,"841631996632":4,"843411195278":4,"843692803383":4,"844428789616":4,"848044800758":4,"851040017605":4,"852166390419":4,"852575981617":4,"853574407101":4,"85437438488":4,"85886080265":4,"860332798958":4,"862348806858":4,"86245117m":9,"867276787758":4,"869497597218":4,"875001597404":4,"876377594471":4,"876627194881":4,"8792709351m":9,"883":9,"888671982288":4,"890803205967":4,"893279993534":4,"8942474365m":9,"9004043579m":9,"900499212742":4,"922745585442":4,"93347837925":4,"944480896m":9,"9498825073m":9,"950":9,"961865234m":9,"964":9,"965977478m":9,"971545600891":4,"981":9,"995837402m":9,"997139203548":4,"999763202667":4,"abstract":3,"boolean":10,"break":0,"byte":[3,10],"case":[1,2,3,4,9,10],"class":3,"default":[1,2,3,4,7,9,10],"final":[1,2,4],"float":[1,3,4,6,7,9,10],"function":[0,1,2,4,5,6,9,10],"import":[1,2,4,8,9],"int":[1,3,4,7,9,10],"long":[1,4,6,9],"new":[0,4,7],"public":0,"return":[1,2,3,4,6,7,10],"true":[1,2,4,6,9,10],"try":[1,4,8,9,10],"void":[1,4,7,9,10],"while":[1,3,4,5,9],And:[1,3,4,10],But:[1,4],For:[0,1,2,3,4,7,8,10],Not:0,One:[3,4,10],That:[1,4,6,9],The:[0,1,2,3,4,6,8,9,10],Then:[0,4,7],There:[2,4,5,6,8,9,10],These:[4,8,9,10],Using:[6,7],With:6,__global:7,__global__:[1,4,7,9],__init__:3,__kernel:7,__shared__:[4,9],__syncthread:[4,9],_funcptr:3,_wrapper:10,abl:[0,1,3,4],about:[0,1,3,4,7,9,10],abov:[1,3,4,8,9],abruptli:3,absolut:[2,10],acceler:7,accept:[2,3],access:[1,4,7],accord:10,account:[6,9],achiev:2,acquisit:10,across:[6,9],actual:[0,1,2,3,4,8,9],add:[0,1,3,4,6,9],added:[4,6,10],adding:4,addit:[0,1,4,8],address_mod:10,addtion:4,adjust:1,advanc:3,advis:3,affect:[4,9],after:[0,1,2,3,4,6,8,9,10],again:[1,4,9],against:[2,3],algebra:9,algorithm:[5,7,10],all:[0,1,3,4,5,6,7,8,9,10],allclos:[2,10],alloc:[1,3,4,5,6,10],allow:[1,2,3,4,7,9,10],almost:[2,4],along:[1,8],alpha:10,alreadi:[1,3,4,8,9],also:[0,1,3,4,6,7,8,9,10],altern:10,although:2,alwai:[1,3,4],amd:8,among:4,amount:[1,4,9],analysi:[4,7],analyz:4,ani:[0,1,3,4,6,7,9,10],anneal:[7,10],anoth:[4,6,9,10],ans:10,answer:[1,2,3,4,5,7,10],anyth:1,api:[1,3,7],app:8,appl:8,appli:4,applic:[0,1,4,5,6,10],appropi:4,approx:4,approxim:4,arch:4,architectur:3,area:[4,9],arg:[2,3,4,6,7,9,10],argument:[1,2,3,4,5,6,7,9,10],arithmet:[4,10],around:[1,5],arrai:[1,2,3,4,10],articl:7,artifact:3,assum:[1,3,4,9,10],assumpt:4,astyp:[1,2,4,6,7,9],atol:[2,3,10],attempt:3,author:7,auto:[7,9],automat:[1,4,9,10],auxilliari:10,avail:[1,4,5,7,8],averag:[3,4,6],avoid:[1,9],ax1:4,ax2:4,axesimag:4,axi:10,back:[6,10],backend:[3,6],bandwidth:9,base:[3,7,10],bash:8,basic:[1,3,4],basinhop:[7,10],bayes_opt:10,bayesian:10,becaus:[1,2,4,6,8,9],becom:4,been:[1,4,6,9],befor:[0,2,3,4,6,8,9,10],begin:[1,4],behavior:[1,7,9,10],behaviour:3,behind:6,beignet:8,being:[4,9,10],below:[0,5,6,8,9],ben:7,benchmark:[1,2,3,4,5,6,7,9,10],benefit:9,benvanwerkhoven:8,best1bin:10,best1exp:10,best2bin:10,best2exp:10,best:[3,4,9],best_tim:4,better:[0,4],between:[4,6,7,9,10],beyond:[4,10],bfg:[7,10],bind:[8,10],biologi:4,bit:[1,3,4,6,9],block:[1,3,4,5,9,10],block_size_i:[1,2,4,6,9,10],block_size_nam:[1,3,10],block_size_str:4,block_size_x:[1,2,3,4,6,7,9,10],block_size_z:[1,4,10],blockdim:[1,10],blockidx:[1,4,7,9],boilerpl:4,bool:[3,10],border:[6,10],border_s:1,both:[4,5,7,9],bottom:3,bound:[1,3,9],boundari:4,bracket:3,branch:0,briefli:9,brute:7,brute_forc:10,buffer:3,build:[3,4,8],built:10,bulk:4,c_arg:3,cach:[3,4,8,9,10],call:[1,2,3,4,6,9,10],callabl:[2,3,10],can:[0,1,2,3,4,6,7,8,9,10],cannot:[0,4],capabl:[0,3,4,9,10],care:4,cartesian:1,cast:10,caus:4,cedric:7,cell:[1,4,9],center:5,central:4,certain:[1,3,4],chanc:[8,10],chang:[0,7,10],changelog:0,check:[0,2,3,4,6,9],check_argument_list:3,check_argument_typ:3,check_kernel_output:3,check_restrict:3,check_tune_params_list:3,chemistri:4,choic:[6,8],choos:[4,9,10],chunk:6,circumst:1,cite:7,clamp:10,clarifi:6,clean:[5,9],cleaner:4,cleanup:4,cleanup_lib:3,clone:[1,4,8,9],close:[3,4],closer:4,closest:3,cltune:7,cmem_arg:[2,3,10],cobyla:[7,10],code:[1,3,8,9,10],collabor:9,collect:[4,9],color:4,column:9,com:8,combin:[1,3,4,5,7,9,10],come:[4,9],command:[0,7,8],commonli:[4,8,9],commun:4,compact:3,compar:[1,2,4,9],comparison:2,compat:[0,8],compil:[0,1,2,3,4,5,6,7,8,9,10],compile_and_benchmark:3,compile_kernel:3,compiler_opt:[3,10],complain:3,complet:1,complex:[6,9],comprehens:7,comput:[1,2,3,5,6,7,9,10],compute_capability_major:4,compute_capability_minor:4,concentr:4,concept:4,condens:4,condit:[4,9],config:3,configur:[1,3,4,5,9,10],confus:1,consid:[0,9],consist:[5,9],consol:[7,10],constant:[1,3,4,5,6,9,10],construct:[2,9],consumpt:9,contain:[1,3,4,6,7,9,10],contant:9,content:[0,1,3,7,10],context:[3,4],continu:[1,3,4,8,10],continuum:8,contrast:1,control:[4,7,10],conv_filt:1,conveni:[4,6],convent:[3,6,10],convers:10,convert:[4,10],convert_to_arrai:10,convolut:[2,6,9],convolution_correct:2,convolution_kernel:[1,2],convolution_kernel_str:1,convolution_na:2,convolution_stream:[6,7],cooler:4,copi:[0,3,4,10],copy_constant_memory_arg:3,copy_shared_memory_arg:3,copy_texture_memory_arg:3,correct:[6,10],correctli:9,correspond:[1,4,10],correspondingli:1,cost:4,could:[1,2,3,4,6,8,9,10],coupl:9,cours:[1,4,8,9],cover:4,cpp:10,cpu:[2,6],cpu_result:2,creat:[0,1,3,4,9],create_kernel_inst:3,creation:[1,3,10],crossov:10,csv:[4,5],ctype:3,cub:5,cuda:[0,1,2,4,5,6,7,10],cudamemcpytosymbol:6,cudastreamwaitev:6,current:[1,2,3,4,7,9,10],current_problem_s:3,custom:[2,5,10],d_filter:2,data:[1,3,4,6,9,10],datafram:4,debug:3,decreas:[1,9],deep:1,def:[2,4],defin:[1,2,3,4,7,9,10],definit:1,degrad:4,degre:4,delet:3,delete_temp_fil:3,delta:4,demonstr:[2,5,9],denot:[9,10],depend:[1,2,5,7,10],deriv:[1,4],descret:4,describ:[0,1,6],design:[0,4,7],dest:3,detail:[3,7,8,10],detect:[3,7,10],detect_languag:3,determin:[1,4],dev:[0,8],develop:[3,7,8],devic:[1,2,4,5,6,7,10],device_nam:3,device_opt:3,devicealloc:3,devprop:4,dict:[1,2,3,6,7,10],dictionari:[1,3,4,9,10],did:[1,4,9],diff_evo:10,differ:[1,2,3,4,5,6,9,10],differenti:[3,7,10],difficult:4,diffuse_kernel:4,dim:3,dimens:[1,3,4,5,6,9,10],dimension:[5,10],dir:8,direct:[3,4,6,9,10],directli:[3,4,6,9],directori:[0,1,4,7,8,9],discard:3,discontinu:9,discuss:[0,3],disruptive_uniform:10,distanc:4,distant:4,distinct:9,distribut:9,divid:[1,4,6,9,10],divison:10,divisor:[1,3,4,9,10],doc:[0,8],docstr:0,document:[1,2,4,8,9],doe:[2,3,4,6,7,9,10],doi:7,doing:1,domain:[1,4,5],don:[3,4,6,10],done:[1,7,8],doubl:[4,10],doubt:0,down:9,download:8,dramat:9,drastic:9,driver:[3,4],drv:4,dtype:3,due:[9,10],dump:[3,4],dure:[3,4,7,10],dynam:10,each:[1,2,3,4,9,10],earlier:[3,4],easi:[4,7,10],easiest:7,easili:4,effect:[1,4,10],effici:9,either:[3,10],element:[2,3,4,9,10],ellipsi:1,empti:10,enabl:7,end:[1,3,4,9],enough:[1,2,9],ensur:[0,2,4,6,8],enter:[1,4,9],entir:[3,4,9,10],entri:[0,4],env:1,environ:[1,3,8,10],eps:3,equal:[4,9,10],equat:[1,4],equi:4,error:[0,1,2,6,9],essenti:1,estim:4,evalu:[4,9,10],even:[0,4,6,9],event:[4,6],everi:[1,2,4,5,7],everyth:[1,3,4,8],everywher:4,evolut:[3,7,10],exact:7,exactli:[1,3,4,7,9],exampl:[0,2,4,6,8,9,10],except:[3,5],exchang:4,execut:[1,3,4,5,6,7,9,10],exist:[3,10],expand:[1,9],expect:[0,1,2,3,4,7,9,10],explain:[1,3,4,6,8,9],explan:7,expos:3,express:[4,5,6,10],extend:10,extens:[3,7],extern:10,f_h:1,f_w:1,fact:[4,6],factor:[1,4,9],fail:[1,8,10],fals:[3,10],familiar:[1,9],far:[1,4,9],fast:[2,4],faster:[4,9],fastest:3,featur:[1,2,5,8,10],feel:4,few:[1,4,6],fewer:[1,4],field:[2,4],field_copi:4,fifth:9,fig:4,figur:9,file:[0,1,3,4,5,6,9,10],filenam:[1,3,5,9,10],fill:[3,9],filter:[1,2,5,6],filter_height:1,filter_heigth:1,filter_mod:10,filter_s:1,filter_width:1,find:[1,3,6,7,9],fine:4,finish:[1,6],firefli:[7,10],firefly_algorithm:10,first:[0,1,2,4,6,7,8,9,10],first_kernel:2,fit:6,five:1,fix:4,flag:0,flexibl:[2,3,4,9],float32:[1,2,3,4,6,7,9,10],float64:10,fly:4,follow:[0,1,2,3,4,6,7,8,9,10],forbidden:3,forc:7,foreseen:3,fork:0,form:[3,9],format:[3,4],formula:4,fortran:5,fortun:9,found:[1,3,7],four:4,fourth:9,frac:4,fraction:[3,10],free:[1,4,6,8,9],freeli:1,frequent:9,from:[1,2,3,5,6,7,8,9,10],full:[7,8],fulli:8,func:[3,10],function_nam:10,further:[4,7,8,9],futur:[3,7,10],gamma:10,gcc:3,geforc:[4,9],gener:[0,3,4,7,9,10],genet:[7,10],genetic_algorithm:[7,10],get:[4,7,8,9],get_attribut:4,get_bound:3,get_bounds_x0_ep:3,get_config_str:3,get_devic:4,get_environ:3,get_funct:4,get_global_id:7,get_grid_dimens:3,get_initial_condit:4,get_instance_str:3,get_kernel_str:[3,4],get_local_s:10,get_problem_s:3,get_temp_filenam:3,get_thread_block_dimens:3,git:8,github:[0,1,4,8,9],give:4,given:[4,10],global:[3,4],goe:9,going:[1,9],good:[2,4],googl:0,got:4,gpu:[0,1,2,3,5,6,7,9,10],gpu_arg:3,gpu_result:[2,4],grain:4,great:4,grid:[1,3,4,5,6,9,10],grid_div:3,grid_div_i:[1,2,4,6,9,10],grid_div_x:[1,2,4,6,9,10],grid_div_z:10,grid_size_i:6,grid_size_x:6,group:[3,4,10],grow:4,gtx:[4,9],guess:[3,4,10],guid:7,had:1,half:4,halt:6,hand:9,handl:[6,10],happen:[0,1,9],hardwar:[3,4],has:[1,3,4,6,9,10],have:[0,1,3,4,6,7,8,9,10],haven:[1,8],heat:4,height:9,help:0,helper:3,here:[1,6,7,9,10],high:[3,4,9],highest:3,highli:[1,9],hold:[0,4,9,10],home:8,host:[0,3,5,10],hot:4,hotspot:4,how:[0,1,2,3,4,5,7,9,10],howev:[1,2,4,6,8,9,10],html:0,http:[7,8],i_like_convolut:1,idea:[4,6,9],ignor:[1,3,4,10],illeg:1,illustr:5,imag:[1,4],image_height:1,image_width:1,impact:[4,6],implement:[2,3,5,7,10],importantli:4,impos:9,improv:[0,4,9],imshow:4,includ:[0,1,2,3,4,6,9,10],increas:[1,4],independ:9,index:7,indic:[1,10],influenc:1,info:10,inform:[1,3,4,7,10],init:4,initi:[3,4,10],inlin:4,inner:9,input:[1,2,4,5,6,7,9,10],input_imag:1,input_s:[1,2,6],input_width:1,insert:[1,2,6,7],insid:[4,6,7,9,10],inspect:3,instal:[0,1,4,6,9],instanc:[2,3,4,6,10],instant:4,instanti:3,instead:[1,5,9,10],instruct:[4,5,9],int32:[3,7,10],integ:[3,10],integr:0,intel:8,intend:7,interact:3,interest:1,interfac:[1,2,6,10],intermedi:4,intern:3,interpret:1,interv:10,introduc:[4,9],isclos:2,item:[3,4],iter:[3,4,9,10],iterfac:3,its:[2,3,4,7,8,9,10],itself:6,join:4,journal:7,json:[3,4,5,10],jupyt:[1,4,8,9],just:[1,2,3,4,6,7,8,9,10],kappa:10,keep:[4,9],kei:[3,4,9,10],kepler:10,kernel:[0,1,3,6,10],kernel_argu:3,kernel_inst:3,kernel_nam:[1,3,6,10],kernel_opt:3,kernel_sourc:[1,3,10],kernel_str:[1,2,3,4,6,7,10],kernel_tun:[1,2,4,6,7,8,9,10],kernelsourc:3,kerneltun:7,keyword:3,know:[1,4,9],known:9,lambda:4,lang:[3,5,6,10],languag:[3,6,7,9,10],larg:[3,4,10],larger:[4,6],last:3,later:[4,10],latest:8,latter:6,launch:[3,4,6,10],learn:1,left:[3,4],length:10,let:[1,4,7],level:[0,3],librari:[3,5,7],like:[1,3,4,7,9,10],likewis:4,limit:[1,4,5,9,10],limits_:1,line:[1,4],linear:[1,9,10],link:0,linux:8,list:[0,1,2,3,4,5,6,7,8,9,10],littl:[1,3,4,9],load:3,local:0,locat:[0,2,10],lock:5,log:10,longer:[1,3],look:[0,1,3,4,8,9],looks_like_a_filenam:3,lookup:3,loop:[4,9],loss:4,lot:[1,4,9,10],low:[3,4,9],lowest:3,made:3,mai:[1,2,3,4,6,7,8,9,10],main:[1,3],maintain:3,make:[0,1,4,7,8,9],make_context:4,manag:4,mani:[1,4,7,9,10],manual:8,map:[2,5],match:[0,1,2,3,7],matmul:9,matmul_kernel:9,matmul_na:9,matmul_shar:9,matplotlib:[4,8],matric:9,matrix:7,matter:[4,6],maximum:[2,10],maxit:10,mead:[7,10],mean:[0,1,6,7,9],meant:1,measur:[3,4,6,9,10],meet:3,melt:4,mem:3,mem_alloc:4,memcpi:[3,6],memcpy_dtoh:[3,4],memcpy_htod:[3,4],memori:[1,3,5,6,10],memset:3,merg:[4,9],messi:4,metal:4,method:[3,4,6,7,9,10],metric:3,millisecond:4,mimick:1,min:4,mind:4,miniconda3:8,miniconda:8,minim:[0,10],mirror:10,miss:3,mode:0,model:4,modul:[0,3,6,7],moment:[4,10],more:[2,3,4,7,8,9,10],most:[3,4,5,6,9],mostli:[3,10],motion:4,move:[1,3,4,6,9,10],much:[1,4,10],multipl:[3,6,7,10],multiprocessor:4,must:10,mutat:10,mutation_ch:10,my_funct:10,naiv:[1,2,4],naive_kernel_str:1,name:[1,2,3,4,9,10],nativ:8,nbyte:4,ndarrai:3,ndrang:3,nearest:[3,10],necessari:[2,3,4,10],necessarili:[2,6],need:[1,2,3,4,6,7,8,9,10],nelder:[7,10],net:8,network:1,neural:1,newer:[0,8],newli:9,next:[4,9],nice:4,non:[2,10],none:[2,3,7,10],nonumb:1,normal:[3,7,10],normalize_verify_funct:3,normalized_coordin:10,note:[0,1,4,7,8,9,10],notebook:[1,4,9],notic:[1,4],now:[1,3,4,6,9],nugteren:7,num_stream:6,number:[1,2,3,4,5,7,9,10],numer:4,numpi:[1,2,3,4,6,7,8,9,10],nvcc:3,nvidia:[8,9],object:[1,2,3,4,10],obtain:[1,4],occup:9,occurr:3,offer:3,often:4,old:1,older:8,omp_get_wtim:6,onc:[2,3,4,10],one:[0,1,3,4,8,9,10],ones:4,onli:[1,2,3,4,5,6,7,8,9,10],open:[1,2,4,6,7,9],opencl:[0,1,4,5,6,7,9,10],openmp:6,oper:[1,4,6,9],opportun:9,optim:[1,2,3,4,6,7,9,10],option:[1,2,3,4,5,6,7,8,9,10],order:[1,2,3,4,6,7],ordereddict:[3,4,9],org:7,orign:10,other:[1,3,4,6,9,10],otherwis:9,our:[1,4,9],out:[1,2,9],outer:9,output:[0,1,2,3,4,5,6,7,9,10],output_imag:1,output_s:1,over:[3,4,8,9,10],overhead:[4,9],overlap:[5,6,7],overview:7,own:[1,3,6,8],packag:0,page:[0,1,4,5,7,9],pair:4,panda:[4,5,8],paper:7,parallel:[1,3,4],param:[1,2,3,10],paramet:[2,3,4,5,6,7,9,10],parameter_spac:3,parametr:1,pars:4,part:[4,9,10],partial:[2,4],particl:[7,10],particular:[1,4,5,6,9],particularli:1,pass:[0,2,3,4,5,6,7,9,10],path:1,per:[0,1,4,10],perform:[1,2,3,4,6,9,10],physic:7,pick:9,pip:[0,1,4,7,8,9],pipelin:5,pixel:1,place:[1,3,4,10],plai:4,plain:[6,10],platform:[3,7,8,10],pleas:[0,1,7,8],plot:4,plu:10,poi:10,point:[1,3,4,6,9,10],pointer:10,pop:4,popsiz:10,popul:10,posit:[2,3,10],possibl:[0,1,2,4,6,7,9,10],postfix:10,powel:[7,10],power:9,powerful:7,pragma:[4,9],precis:6,precomput:2,prefer:[1,3,4,10],prefix:8,prepar:[3,4],prepare_kernel_str:3,prepend:3,preprocessor:[1,3,7],present:[0,9],press:[1,4,9],pretti:9,previou:4,previous:[3,4,9],primit:10,print:[0,1,4,7,9,10],probabl:10,problem:[0,1,3,4,5,6,9,10],problem_s:[1,2,3,4,6,9,10],problemat:1,proce:9,process:[1,3,4,7,9],process_cach:3,prod:[1,2,6],produc:[0,2],product:[1,4,10],profil:9,program:[2,4,6,7,9],programm:9,promis:1,properti:[3,9,10],propos:0,provid:[2,3,4,6,7,10],pso:10,publish:7,pull:0,purpos:[4,6,9,10],put:[0,4],pycuda:[0,3,4,6],pylint:0,pyopencl:[0,3],pyplot:4,pytest:0,python:[0,1,3,5,6,7,9,10],pythonpath:8,qualiti:[3,6],quantiti:4,queue:7,quick:4,quickli:4,quiet:[3,10],quit:[4,9],race:9,radiat:4,rais:3,rand1bin:10,rand1exp:10,rand2bin:10,rand2exp:10,randint:4,randn:[1,2,6,7,9],random:[1,2,3,4,6,7,9,10],random_sampl:10,randtobest1bin:10,randtobest1exp:10,rang:[1,2,4,6],rather:[4,10],read:[1,2,3,4,6,9,10],read_fil:3,readi:[1,3,4,9],ready_argument_list:3,realiti:9,realiz:9,realli:[1,4,8],reason:[1,3,10],recent:[3,8],recommend:8,record:[1,4,10],redistribut:4,reduc:[4,9],reduct:[2,10],redund:9,ref:10,refer:[1,2,3,4,5,6,10],reflect:2,regard:[0,3],region:4,regist:[1,4,9],regular:3,reinterpret_cast:10,releas:3,relev:3,rememb:[1,4,9],remov:0,repeatedli:3,replac:[1,2,3,4,7,9,10],replace_param_occurr:3,repo:8,report:10,repositori:[0,1,4,8,9],repres:4,represent:3,reproduc:0,request:[0,10],requir:[0,1,3,4,6,7,8,9],resourc:10,respect:9,respons:3,rest:[3,4],restart:4,restrict:[3,5,9,10],result:[0,1,2,3,7,9,10],result_host:3,retri:8,retriev:[1,3],reus:[1,4,9],right:[1,4,7,8],roadmap:0,robust:3,room:9,roughli:9,round:[4,10],row:9,run:[1,2,3,4,6,8,9,10],run_kernel:[1,2,3,5,10],runtim:[1,3,4,7],sai:[3,4,9],same:[0,1,2,3,4,6,7,10],sampl:[3,10],sample_fract:[3,10],satisfi:10,save:4,scalar:[1,4,10],scale:3,scipi:5,script:[1,3,7,9],sdk:8,search:[1,3,5,9,10],second:[1,2,4,9,10],secondli:[1,9],section:[3,4],see:[0,1,3,4,6,7,8,9,10],seem:4,seen:[0,1,3,9],select:[0,1,3,4,7,9,10],semant:2,sensibl:9,separ:[5,6,10],seri:3,serv:4,session:3,set:[1,2,3,4,5,9,10],set_titl:4,setup:[1,4,6],setup_block_and_grid:3,setup_method_argu:3,setup_method_opt:3,sever:[4,5,8,9,10],sh_u:4,share:[1,3,10],sheet:4,shift:[1,4,9],shortli:1,should:[0,1,2,3,4,6,9,10],show:[1,4,5,7],shown:[1,3],shuffl:5,signal:1,signatur:[1,3],signific:0,significantli:9,silent:1,similar:[3,6,9,10],similarli:1,simpl:[1,3,4,5,6,7,9,10],simpli:[1,2,3,4,10],simplic:4,simplifi:[4,7],simul:[7,10],simulated_ann:10,sinc:1,singl:[1,2,3,4,6,9,10],single_point:10,size:[1,2,3,4,5,6,7,9,10],skip:[0,1,4,10],slightli:[6,9],slowest:3,slsqp:[7,10],sm_:4,small:[1,4,9],smem_arg:[3,10],snap:3,snap_to_nearest_config:3,snippet:2,softwar:[1,3,4,7],solut:[7,9],some:[1,3,4,8,9,10],somehow:4,someth:[1,4,9],sometim:4,somewher:1,sourc:[0,1,3,6,10],sourcemodul:4,space:[1,2,3,6,7,9,10],spatial:4,special:[1,4],specif:[1,3,4,10],specifi:[1,2,3,4,6,7,9,10],speed:7,spent:6,sphinxdoc:0,split:6,spread:6,squar:9,src:3,stai:1,start:[2,4,6,7,8,9],state:[3,4,10],statement:[1,9],stdout:4,step:[4,9],still:[0,2,7,9],store:[1,3,9],str:4,strategi:[1,10],strategy_opt:10,stream:[3,4,7],string:[1,3,4,5,9,10],structur:[1,4,9],style:0,submatric:9,subplot:4,sudo:8,suffix:[3,10],suit:10,sum:[1,2,9],sum_float:2,sum_x:2,summar:10,suppli:[3,6,10],support:[1,3,4,6,7,8,10],suppos:4,sure:[1,4,7,8,9],swarm:[7,10],symbol:[3,10],symlink:0,synchron:[4,9],system:[7,8],t_min:10,take:[1,3,4,9,10],techniqu:9,tell:[1,4,5,6,9],temp_x:3,temperatur:4,templat:10,temporari:3,term:1,terminolog:4,test:[4,5,7,9,10],test_vector_add:5,test_vector_add_parameter:5,texmem_arg:[3,10],text:[4,9],textur:[3,10],than:[1,3,4,10],thank:0,thei:[3,4,5,9,10],them:[0,1,6,9],therefor:[1,2,3,4,6,9],thi:[0,1,2,3,4,6,7,8,9,10],thing:[1,6,7,9],think:4,third:[2,9],those:[1,5],thousand:4,thread:[1,3,4,5,10],threadidx:[1,4,7,9],three:[1,2,3,9],through:[3,4,7,10],tiker:8,tile:[1,5,9],tile_size_i:[1,2,4,6,9,10],tile_size_x:[1,2,4,6,9],time:[1,3,4,6,7,9,10],time_sinc:4,titan:[4,9],titl:7,tnc:[7,10],to_csv:4,togeth:[4,8,10],token:1,toler:2,too:[1,4,6,9,10],took:[1,3,4,10],toolkit:[7,8],top:[0,3],total:[1,4,9],track:0,transfer:[5,6,7],treat:10,tri:4,troubl:8,trust:2,trusti:1,tunabl:[3,4,5,7,9,10],tune:[2,3,5,8,10],tune_kernel:[1,2,3,4,6,7,9,10],tune_param:[1,2,3,4,6,7,9,10],tune_params_kei:3,tuner:[0,1,2,3,6,9,10],tuning_opt:3,tupl:[3,10],tutori:[0,1,7,9],two:[1,3,4,5,9,10],two_point:10,type:[0,1,2,3,4,5,7,8,9,10],typenam:10,typic:[3,8,9,10],u_new:4,u_old:4,ucb:10,undefin:[1,3,4,9],under:[1,10],understand:1,underutil:4,uniform:10,unit:[0,3,7],unless:1,unload:3,unrol:[4,9],unscale_and_snap_to_nearest:3,unsign:3,until:6,updat:0,upload:6,usag:[9,10],use:[0,1,2,3,4,5,6,7,8,9,10],usecas:5,used:[0,1,2,3,4,6,7,8,9,10],useful:[1,4,6],user:[1,2,3,7,8],uses:[1,2,3,4,6,7,9,10],using:[0,1,2,3,4,5,6,7,8,9,10],util:9,valid:[3,5,9],valu:[1,2,3,4,5,6,9,10],van:7,vari:[4,9],variabl:[3,8,10],vector:6,vector_add:7,verbos:[1,2,3,4,6,10],veri:[2,4,6,8,9],verif:[5,10],verifi:[2,3,5,7,10],verify_partial_reduc:2,version:[0,1,8,9,10],virtual:8,visual:9,volum:7,wai:[1,4,6,7,8,9,10],want:[2,6,8,9,10],warp:10,warpsiz:9,weight:1,well:[4,7,9],went:4,were:[1,4,9,10],werkhoven:7,wget:8,what:[0,1,2,3,4,6,7,9,10],whatev:[3,6],when:[0,1,3,4,6,8,9,10],whenev:2,where:[0,1,2,3,4,9,10],whether:[3,10],which:[1,3,4,5,6,7,9,10],whole:[3,4,9],whose:[2,10],why:[4,6],wide:[4,8,9],width:9,wiki:8,wish:3,within:[4,9,10],without:[4,6],won:1,word:9,work:[0,1,3,4,8,10],worri:4,worst:4,would:[1,4,7],wrap:[3,10],wrapper:10,write:[1,5,10],write_fil:3,written:0,x86_64:8,x_i:4,xyz:10,year:7,yet:[1,6],yield:9,you:[0,1,2,3,4,6,7,8,9,10],your:[0,1,4,6,7,8,10],yourself:[6,10],zero:[1,2,6,9],zeros_lik:[4,7,9]},titles:["Contribution guide","Getting Started","Kernel Correctness Verification","Design documentation","Tutorial: From physics to tuned GPU kernels","Kernel Tuner Examples","Tuning Host Code","The Kernel Tuner documentation","Installation Guide","Matrix multiplication","API Documentation"],titleterms:{"function":3,The:7,Using:[4,9],add:5,api:10,auto:4,basinhop:3,brute_forc:3,build:0,cfunction:3,citat:7,code:[0,4,5,6,7],comput:4,contribut:[0,7],convolut:[1,5],convolution_correct:5,convolution_stream:5,core:3,correct:[2,7],cuda:[3,8,9],cudafunct:3,depend:8,design:3,develop:0,devic:3,deviceinterfac:3,diff_evo:3,diffus:4,document:[0,3,7,10],exampl:[1,5,7],expdist:5,from:4,gener:5,get:1,gpu:4,guid:[0,8],host:[6,7],implement:[1,4],increas:9,indic:7,instal:[7,8],interfac:3,introduct:7,issu:0,kernel:[2,4,5,7,8,9],kernel_tun:3,matrix:[5,9],memori:[4,9],minim:3,more:1,multipl:[5,9],naiv:9,number:6,opencl:[3,8],openclfunct:3,packag:8,paramet:1,per:9,physic:4,point:5,polygon:5,pycuda:8,pyopencl:8,python:[4,8],random_sampl:3,reduct:5,relat:7,report:0,result:4,run:0,runner:3,search:7,sepconv:5,sequenti:3,sequentialrunn:3,setup:0,share:[4,9],spars:5,start:1,stencil:5,store:4,strategi:[3,7],stream:6,tabl:7,test:[0,1],thread:9,tile:4,tunabl:1,tune:[1,4,6,7,9],tuner:[4,5,7,8],tutori:[4,8],usag:7,util:3,vector:5,verif:[2,7],work:[7,9]}})